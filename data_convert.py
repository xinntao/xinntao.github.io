import pandas as pd
import json
import re

def convert_csv_to_js(csv_path, output_js_path):
    # 读取数据
    df = pd.read_csv(csv_path)

    # 1. 过滤：仅保留需要在主页显示的项目
    df = df[df['显示在主页'] == 'Yes'].copy()

    # 2. 格式化工具函数
    def format_authors(name_str):
        if pd.isna(name_str): return ""
        # 将 Xintao Wang 加粗
        name_str = name_str.replace("Xintao Wang", "<b>Xintao Wang</b>")
        # 将 # 转换为上标 (用于共同一作/通讯作者)
        name_str = name_str.replace("#", "<sup>#</sup>")
        return name_str

    def extract_year(row):
        # 从 Arxiv ID (YYMM.NNNNN) 提取年份
        arxiv = str(row['Arxiv'])
        match = re.search(r'(\d{2})\d{2}\.\d+', arxiv)
        if match:
            return "20" + match.group(1)
        return "Unknown"

    def get_arxiv_id(url):
        if pd.isna(url) or url == 'N/A' or url == '': return None
        # 提取 URL 末尾的数字部分 (如 2503.11647)
        match = re.search(r'(\d{4}\.\d+)', str(url))
        return match.group(1) if match else None

    def get_image_info(teaser_url):
        if pd.isna(teaser_url) or teaser_url == 'N/A' or teaser_url == '':
            return None
        teaser_url = str(teaser_url).strip()
        ext = teaser_url.split('.')[-1].lower()
        # 根据后缀判断类型
        media_type = "video" if ext in ['mp4', 'webm', 'ogg'] else "img"
        return {"type": media_type, "src": teaser_url}

    # 3. 处理数据并按年份分组
    publications_data = {}

    for _, row in df.iterrows():
        year = extract_year(row)
        if year not in publications_data:
            publications_data[year] = []

        paper = {
            "title": row['标题'],
            "authors": format_authors(row['作者']),
            "arxiv": get_arxiv_id(row['Arxiv']),
            "venue": row['中稿'] if not pd.isna(row['中稿']) else None,
            "note": row['Note'] if not pd.isna(row['Note']) else None,
            "projectPage": row['ProjectPage'] if not pd.isna(row['ProjectPage']) else None,
            "dataset": row['Dataset'] if not pd.isna(row['Dataset']) else None,
            "github": row['GitHub'] if not pd.isna(row['GitHub']) else None,
            "image": get_image_info(row['Teaser路径']),
            "highlight": row['高亮显示'] == 'Yes'
        }

        # 剔除空字段以保持 JS 简洁
        paper = {k: v for k, v in paper.items() if v is not None}
        publications_data[year].append(paper)

    # 4. 生成 JS 字符串
    sorted_years = sorted(publications_data.keys(), reverse=True)

    js_output = "// 论文数据结构\nconst publicationsData = {\n"
    for year in sorted_years:
        js_output += f"  {year}: [\n"
        for paper in publications_data[year]:
            js_output += "    {\n"
            for k, v in paper.items():
                if k == "image":
                    # 格式化图像/视频对象
                    img_json = json.dumps(v, ensure_ascii=False)
                    js_output += f"      {k}: {img_json},\n"
                elif isinstance(v, bool):
                    js_output += f"      {k}: {str(v).lower()},\n"
                else:
                    val_str = json.dumps(v, ensure_ascii=False)
                    js_output += f"      {k}: {val_str},\n"
            js_output = js_output.rstrip(",\n") + "\n    },\n"
        js_output = js_output.rstrip(",\n") + "\n  ],\n"
    js_output = js_output.rstrip(",\n") + "\n};\n"

    # 5. 保存文件
    with open(output_js_path, 'w', encoding='utf-8') as f:
        f.write(js_output)
    print(f"转换完成！文件已保存至: {output_js_path}")

# 使用示例
if __name__ == "__main__":
    convert_csv_to_js('PaperInfo - Sheet1.csv', 'assets/js/publications-data.js')