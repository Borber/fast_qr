#[cfg(test)]
mod tests;

pub mod comptime;

use comptime::qrcode::QRCode;

#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

fn array_to_vec<const N: usize>(mat: [[bool; N]; N]) -> Vec<u8> {
    let mut vec = Vec::new();

    for line in &mat {
        vec.extend_from_slice(line);
    }

    const MODULE_WIDTH: usize = 8;

    let vecu8 = vec
        .iter()
        .map(|b| {
            let val = 255 - (*b as u8) * 255;
            let rgba = [val, val, val, 255];
            [rgba; MODULE_WIDTH]
        })
        .collect::<Vec<[[u8; 4]; MODULE_WIDTH]>>();

    let mut vec = Vec::new();
    for chunk in vecu8.chunks(N) {
        for _ in 0..MODULE_WIDTH {
            vec.push(chunk);
        }
    }

    let mut result = Vec::<u8>::new();
    for chunk in vec {
        for array in chunk {
            for value in array {
                result.push(value[0]);
                result.push(value[1]);
                result.push(value[2]);
                result.push(value[3]);
            }
        }
    }

    return result;
}

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub fn qr(content: &str) -> Vec<u8> {
    let qrcode: Option<QRCode> = QRCode::new(content.as_bytes(), None, None, None);

    if let Some(q) = qrcode {
        return match q {
            QRCode::V1(m) => array_to_vec(m),
            QRCode::V2(m) => array_to_vec(m),
            QRCode::V3(m) => array_to_vec(m),
            QRCode::V4(m) => array_to_vec(m),
            QRCode::V5(m) => array_to_vec(m),
            QRCode::V6(m) => array_to_vec(m),
            QRCode::V7(m) => array_to_vec(m),
            QRCode::V8(m) => array_to_vec(m),
            QRCode::V9(m) => array_to_vec(m),
            QRCode::V10(m) => array_to_vec(m),
            QRCode::V11(m) => array_to_vec(m),
            QRCode::V12(m) => array_to_vec(m),
            QRCode::V13(m) => array_to_vec(m),
            QRCode::V14(m) => array_to_vec(m),
            QRCode::V15(m) => array_to_vec(m),
            QRCode::V16(m) => array_to_vec(m),
            QRCode::V17(m) => array_to_vec(m),
            QRCode::V18(m) => array_to_vec(m),
            QRCode::V19(m) => array_to_vec(m),
            QRCode::V20(m) => array_to_vec(m),
            QRCode::V21(m) => array_to_vec(m),
            QRCode::V22(m) => array_to_vec(m),
            QRCode::V23(m) => array_to_vec(m),
            QRCode::V24(m) => array_to_vec(m),
            QRCode::V25(m) => array_to_vec(m),
            QRCode::V26(m) => array_to_vec(m),
            QRCode::V27(m) => array_to_vec(m),
            QRCode::V28(m) => array_to_vec(m),
            QRCode::V29(m) => array_to_vec(m),
            QRCode::V30(m) => array_to_vec(m),
            QRCode::V31(m) => array_to_vec(m),
            QRCode::V32(m) => array_to_vec(m),
            QRCode::V33(m) => array_to_vec(m),
            QRCode::V34(m) => array_to_vec(m),
            QRCode::V35(m) => array_to_vec(m),
            QRCode::V36(m) => array_to_vec(m),
            QRCode::V37(m) => array_to_vec(m),
            QRCode::V38(m) => array_to_vec(m),
            QRCode::V39(m) => array_to_vec(m),
            QRCode::V40(m) => array_to_vec(m),
        };
    }

    return Vec::new();
}

/*
#[cfg(test)]
mod tests;

pub mod comptime;

use comptime::qrcode::QRCode;

#[cfg(target_arch = "wasm32")]
use js_sys;
#[cfg(target_arch = "wasm32")]
use wasm_bindgen::prelude::*;

#[cfg(target_arch = "wasm32")]
fn array_to_vec<const N: usize>(mat: [[bool; N]; N]) -> js_sys::Uint8Array {
    let mut vec = Vec::new();

    for line in &mat {
        vec.extend_from_slice(line);
    }

    let tmp = vec.iter().map(|b| *b as u8).collect::<Vec<u8>>();

    return js_sys::Uint8Array::from(&tmp[..]);
}

#[cfg(target_arch = "wasm32")]
#[wasm_bindgen]
pub extern "C" fn qr(content: &str) -> js_sys::Uint8Array {
    let qrcode: Option<QRCode> = QRCode::new(content.as_bytes(), None, None, None);

    if let Some(q) = qrcode {
        return match q {
            QRCode::V1(m) => array_to_vec(m),
            QRCode::V2(m) => array_to_vec(m),
            QRCode::V3(m) => array_to_vec(m),
            QRCode::V4(m) => array_to_vec(m),
            QRCode::V5(m) => array_to_vec(m),
            QRCode::V6(m) => array_to_vec(m),
            QRCode::V7(m) => array_to_vec(m),
            QRCode::V8(m) => array_to_vec(m),
            QRCode::V9(m) => array_to_vec(m),
            QRCode::V10(m) => array_to_vec(m),
            QRCode::V11(m) => array_to_vec(m),
            QRCode::V12(m) => array_to_vec(m),
            QRCode::V13(m) => array_to_vec(m),
            QRCode::V14(m) => array_to_vec(m),
            QRCode::V15(m) => array_to_vec(m),
            QRCode::V16(m) => array_to_vec(m),
            QRCode::V17(m) => array_to_vec(m),
            QRCode::V18(m) => array_to_vec(m),
            QRCode::V19(m) => array_to_vec(m),
            QRCode::V20(m) => array_to_vec(m),
            QRCode::V21(m) => array_to_vec(m),
            QRCode::V22(m) => array_to_vec(m),
            QRCode::V23(m) => array_to_vec(m),
            QRCode::V24(m) => array_to_vec(m),
            QRCode::V25(m) => array_to_vec(m),
            QRCode::V26(m) => array_to_vec(m),
            QRCode::V27(m) => array_to_vec(m),
            QRCode::V28(m) => array_to_vec(m),
            QRCode::V29(m) => array_to_vec(m),
            QRCode::V30(m) => array_to_vec(m),
            QRCode::V31(m) => array_to_vec(m),
            QRCode::V32(m) => array_to_vec(m),
            QRCode::V33(m) => array_to_vec(m),
            QRCode::V34(m) => array_to_vec(m),
            QRCode::V35(m) => array_to_vec(m),
            QRCode::V36(m) => array_to_vec(m),
            QRCode::V37(m) => array_to_vec(m),
            QRCode::V38(m) => array_to_vec(m),
            QRCode::V39(m) => array_to_vec(m),
            QRCode::V40(m) => array_to_vec(m),
        };
    }

    return js_sys::Uint8Array::new_with_length(0);
}
*/
