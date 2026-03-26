---
title: "License Plate Recognition"
description: "Developed an automatic license plate recognition system using deep learning, OpenCV, YOLOv8, and OCR for real-time plate detection and text extraction."
pid: 1
date: 2024-07-01
title_vi: "Nhận diện biển số xe"
description_vi: "Phát triển hệ thống nhận diện biển số xe tự động bằng deep learning, OpenCV, YOLOv8 và OCR để phát hiện và trích xuất ký tự theo thời gian thực."
slug: "license-plate-recognition"
ready: true
featured: true
tags: ["Python", "YOLOv8", "Tesseract OCR", "OpenCV", "Deep Learning"]
category: "research"
links:
  - label: "GitHub"
    url: "https://github.com/phuc147aw/RPL_Yolov8"
---

<div class="lang-en">

## Context

This project was built to apply computer vision and deep learning to a real-world recognition task. The goal was to create a system that could automatically detect vehicle license plates from images and extract the plate text with reliable accuracy.

## Problem

- Manual plate reading is slow and inconsistent
- Traditional image processing pipelines struggle in complex lighting and viewing conditions
- A practical solution needs both accurate detection and readable OCR output

## Solution

I developed **License Plate Recognition** as a complete recognition pipeline:

- Used **YOLOv8** to detect license plates in input images
- Built an **image processing workflow with OpenCV** to clean and prepare cropped plates
- Integrated **Tesseract OCR** for text extraction from the detected plate region
- Optimized the pipeline for faster execution and more stable real-time processing

## Outcome

- Achieved over **85% recognition accuracy**
- Built a complete end-to-end workflow from detection to text extraction
- Strengthened my practical skills in Python, computer vision, model integration, and optimization

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
- Tối ưu pipeline để tăng tốc độ xử lý và cải thiện độ ổn định cho bài toán gần thời gian thực

## Kết quả

- Đạt độ chính xác nhận diện trên **85%**
- Hoàn thiện được quy trình end-to-end từ phát hiện đến trích xuất ký tự
- Củng cố kỹ năng thực tế về Python, computer vision, tích hợp mô hình và tối ưu hiệu năng

## Tech Stack

Python, YOLOv8, Tesseract OCR, OpenCV, Deep Learning

</div>
