use crate::qrcode::QRCode;

#![cfg(target_arch = "wasm32")]
pub fn qr(CONTENT: &str, MASK: Option<usize>, VERSION: Option<Version>, LEVEL: Option<ECL>) {
    const QRCODE: Option<QRCode> = QRCode::new(CONTENT.as_bytes(), LEVEL, VERSION, MASK);

    if let Some(q) = QRCODE {
        match q {
            Version::V1(m) => m,
        }
        q.print();
    }
}
