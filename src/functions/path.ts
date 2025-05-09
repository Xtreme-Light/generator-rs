import { open } from '@tauri-apps/plugin-dialog';
import { info, error } from '@tauri-apps/plugin-log'
// 获取目录的完整地址
export async function getDirectoryPath() : Promise<string | null> {
  try {
    const selected = await open({
      directory: true,
      multiple: false,
      recursive: false,
      title: "选择目录",
      filters: [
        {
          name: "文件夹",
          extensions: ["*"]
        }
      ]
    });
    if (selected) {
      info("选择目录为：" + selected);
      return selected;
    } else {
      info("取消");
      return null;
    }
  } catch (e) {
    error("选择目录出错" + e);
    return null

  }

}