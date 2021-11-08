#[cfg(test)]
mod tests;

pub mod comptime;

use comptime::qrcode::QRCode;

fn array_to_vec<const N: usize>(mat: [[bool; N]; N]) -> Vec<bool> {
    let mut vec = Vec::new();

    for line in &mat {
        vec.extend_from_slice(line);
    }

    return vec;
}

// #![cfg(target_arch = "wasm32")]
pub fn qr(content: &str) -> Vec<bool> {
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
