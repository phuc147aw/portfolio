---
title: "Speech-to-Text Conversion System"
description: "Developed a Vietnamese speech recognition system using Conformer architecture with a training and evaluation pipeline for stable speech-to-text conversion."
pid: 2
date: 2025-01-01
title_vi: "Hệ thống chuyển giọng nói thành văn bản"
description_vi: "Phát triển hệ thống nhận dạng giọng nói tiếng Việt sử dụng kiến trúc Conformer cùng pipeline huấn luyện và đánh giá để chuyển đổi âm thanh thành văn bản ổn định và chính xác."
slug: "speech-to-text-conversion-system"
ready: true
featured: true
tags: ["Python", "TensorFlow", "Conformer", "ASR", "Speech Recognition"]
category: "research"
coverImage: "/images/projects/speech-to-text-conversion-system/cover.png"
gallery:
  - "/images/projects/speech-to-text-conversion-system/screenshot-1.png"
  - "/images/projects/speech-to-text-conversion-system/screenshot-2.png"
  - "/images/projects/speech-to-text-conversion-system/screenshot-3.png"
links:
  - label: "GitHub"
    url: "https://github.com/phuc147aw/KL_ASR"
---

<div class="lang-en">

## Context

This project focused on Vietnamese automatic speech recognition and the workflow required to train a robust model. The objective was to convert spoken audio into text while keeping the system usable through a simple demo interface.

## Problem

- Vietnamese speech data varies by region, speaking speed, and recording conditions
- Recognition quality depends on both preprocessing quality and model architecture
- A useful project needs more than training logs and should expose the model through a practical interface

## Solution

I developed **Speech-to-Text Conversion System** around a modern ASR workflow:

- Used **Conformer architecture** for speech recognition modeling
- Standardized and prepared audio data before training
- Tracked model quality through loss, WER, and CER across multiple epochs
- Built a demo interface supporting microphone recording and local audio file uploads

## Outcome

- Built a working speech recognition pipeline from data preparation to evaluation
- Delivered a demo that converts Vietnamese audio into text
- Improved my skills in deep learning workflows, audio processing, and ASR experimentation

## Tech Stack

Python, TensorFlow, Conformer, Speech Recognition, Audio Processing

</div>

<div class="lang-vi">

## Bối cảnh

Dự án này tập trung vào bài toán nhận dạng giọng nói tự động cho tiếng Việt. Mục tiêu là xây dựng hệ thống có thể chuyển đổi âm thanh thành văn bản với độ ổn định tốt, đồng thời hỗ trợ thử nghiệm thực tế qua giao diện web.

## Vấn đề

- Dữ liệu giọng nói tiếng Việt có khác biệt về vùng miền, tốc độ nói và môi trường ghi âm
- Chất lượng nhận dạng phụ thuộc nhiều vào cả mô hình lẫn bước tiền xử lý âm thanh
- Cần một pipeline huấn luyện và đánh giá lặp lại được để cải thiện độ chính xác một cách có hệ thống

## Giải pháp

Mình phát triển **Speech-to-Text Conversion System** dựa trên workflow ASR hiện đại:

- Sử dụng **kiến trúc Conformer** cho bài toán nhận dạng giọng nói
- Chuẩn hóa dữ liệu âm thanh về tần số lấy mẫu, mono và mức âm lượng phù hợp cho huấn luyện
- Theo dõi loss, WER và CER qua nhiều epoch để đánh giá chất lượng mô hình
- Xây dựng giao diện demo hỗ trợ ghi âm trực tiếp và tải file âm thanh từ máy tính

## Kết quả

- Xây dựng được pipeline nhận dạng giọng nói hoàn chỉnh từ tiền xử lý dữ liệu đến đánh giá
- Tạo bản demo trực quan cho phép thu âm, tải file và hiển thị văn bản nhận dạng
- Nâng cao kỹ năng về deep learning workflow, xử lý dữ liệu âm thanh và thực nghiệm ASR

## Tech Stack

Python, TensorFlow, Conformer, Speech Recognition, Audio Processing

</div>
