import os

# Number of folders to create
num_folders = 20

for i in range(2, num_folders + 1):
    folder_name = f"day-{i}"
    
    # Create folder
    os.makedirs(folder_name, exist_ok=True)

    # File paths
    html_file = os.path.join(folder_name, "index.html")
    md_file = os.path.join(folder_name, "questions.md")

    # Create index.html
    with open(html_file, "w") as f:
        f.write(f"""<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day {i} </title>
    <script src="script.js" defer></script>
</head>

<body style="background-color: #27292d; color: white; font-family: cursive;">
    <h1>Day {i} </h1>
    <h2>Result </h2>
    <div id="output" style="background-color: black; padding: 3rem; border-radius: 10px; font-size: 1.5rem; font-weight: bold;"></div>
</body>

</html>
""")

    # Create questions.md
    with open(md_file, "w") as f:
        f.write(f"# Day {i} Questions\n")

print("20 folders created successfully!")