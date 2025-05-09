#![allow(unused_variables)]

use log::info;
use tauri::plugin::{Builder, TauriPlugin};
use tauri::{Runtime, WindowEvent};
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_dialog::MessageDialogButtons;
pub fn init<R: Runtime>() -> TauriPlugin<R> {
    // 如果想要使插件可选，请使用 `Builder::<R, Option<Config>>` 替换
    Builder::<R>::new("confirm_exit")
        .on_event(|app, event| match event {
            tauri::RunEvent::Exit => {
                info!("正式退出");
                // 这里可以去做一下优雅宕机
            }
            tauri::RunEvent::ExitRequested { code, api, .. } => {}
            tauri::RunEvent::WindowEvent { label, event, .. } => {
                if let WindowEvent::CloseRequested { api, .. } = event {
                    let answer = app
                        .dialog()
                        .message("确认退出？")
                        .title("退出")
                        .buttons(MessageDialogButtons::OkCancelCustom(
                            "确定".to_string(),
                            "取消".to_string(),
                        ))
                        .blocking_show();

                    match answer {
                        true => {
                            app.exit(999);
                        }
                        _ => {
                            api.prevent_close();
                        }
                    }
                }
            }
            tauri::RunEvent::WebviewEvent { label, event, .. } => {}
            tauri::RunEvent::Ready => {}
            tauri::RunEvent::Resumed => {}
            tauri::RunEvent::MainEventsCleared => {}
            tauri::RunEvent::MenuEvent(_menu_event) => {}
            _ => {}
        })
        .setup(|app, _api| Ok(()))
        .build()
}
