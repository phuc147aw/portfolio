---
title: "License Plate Recognition"
description: "Developed an automatic license plate recognition system using deep learning, YOLOv8, OpenCV, and OCR for real-time plate detection and text extraction."
pid: 1
date: 2024-07-01
title_vi: "Nhận diện biển số xe"
description_vi: "Phát triển hệ thống nhận diện biển số xe tự động bằng deep learning, YOLOv8, OpenCV và OCR để phát hiện và trích xuất ký tự theo thời gian thực."
slug: "license-plate-recognition"
ready: true
featured: true
tags: ["Python", "YOLOv8", "Tesseract OCR", "OpenCV", "Deep Learning"]
category: "research"
coverImage: "/images/projects/license-plate-recognition/cover.png"
gallery:
  - "/images/projects/license-plate-recognition/screenshot-1.png"
  - "/images/projects/license-plate-recognition/screenshot-2.png"
  - "/images/projects/license-plate-recognition/screenshot-3.png"
links:
  - label: "GitHub"
    url: "https://github.com/phuc147aw/RPL_Yolov8"
---

<div class="lang-en">

## Context

This project applies computer vision and deep learning to a practical recognition task. The goal was to detect vehicle license plates from images and extract the plate text with a usable level of accuracy.

## Problem

- Manual plate reading is slow and inconsistent
- Traditional image processing methods struggle under complex lighting and viewing angles
- A practical solution needs both accurate plate localization and readable OCR output

## Solution

I built **License Plate Recognition** as a complete recognition pipeline:

- Used **YOLOv8** to detect license plates in the input image
- Processed the cropped plate region with **OpenCV** before text extraction
- Applied **Tesseract OCR** to read plate characters
- Built a demo flow for image upload, plate highlighting, and result display

## Outcome

- Achieved over **85% recognition accuracy**
- Completed an end-to-end pipeline from detection to OCR output
- Added a working demo that clearly shows both successful recognition and failure cases

## Tech Stack

Python, YOLOv8, Tesseract OCR, OpenCV, Deep Learning

</div>

<div class="lang-vi">

## Bối cảnh

Dự án này được thực hiện nhằm áp dụng computer vision và deep learning vào một bài toán thực tế. Mục tiêu là xây dựng hệ thống có thể tự động phát hiện biển số xe từ hình ảnh và trích xuất nội dung biển số với độ chính xác đủ tốt.

## Vấn đề

- Việc đọc biển số thủ công mất thời gian và thiếu ổn định
- Các kỹ thuật xử lý ảnh truyền thống thường khó hoạt động tốt trong điều kiện ánh sáng và góc nhìn phức tạp
- Một giải pháp thực tế cần vừa phát hiện đúng vùng biển số vừa đọc được ký tự rõ ràng

## Giải pháp

Mình xây dựng **License Plate Recognition** như một pipeline nhận diện hoàn chỉnh:

- Sử dụng **YOLOv8** để phát hiện vị trí biển số trong ảnh đầu vào
- Xây dựng **quy trình xử lý ảnh bằng OpenCV** để làm sạch và chuẩn bị vùng biển số đã cắt
- Tích hợp **Tesseract OCR** để trích xuất văn bản từ vùng biển số đã phát hiện
- Triển khai giao diện thử nghiệm cho phép tải ảnh, xử lý, khoanh vùng biển số và hiển thị kết quả nhận diện

## Kết quả

- Đạt độ chính xác nhận diện trên **85%**
- Hoàn thiện được quy trình end-to-end từ phát hiện đến trích xuất ký tự
- Xây dựng bản demo hiển thị rõ trường hợp nhận diện thành công và trường hợp không phát hiện được biển số

## Tech Stack

Python, YOLOv8, Tesseract OCR, OpenCV, Deep Learning

</div>
