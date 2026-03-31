---
title: "Debt Repayment Prediction"
description: "Built a machine learning system that predicts a customer's repayment ability and presents the result through a web interface with prediction history tracking."
pid: 4
date: 2024-11-01
title_vi: "Dự đoán khả năng trả nợ của khách hàng"
description_vi: "Xây dựng hệ thống học máy dự đoán khả năng trả nợ của khách hàng và hiển thị kết quả qua giao diện web có lưu lịch sử dự đoán."
slug: "debt-repayment-prediction"
ready: true
featured: true
tags: ["Python", "Machine Learning", "Logistic Regression", "Flask", "PyQt5"]
category: "research"
coverImage: "/images/projects/debt-repayment-prediction/cover.png"
gallery:
  - "/images/projects/debt-repayment-prediction/screenshot-1.png"
  - "/images/projects/debt-repayment-prediction/screenshot-2.png"
  - "/images/projects/debt-repayment-prediction/screenshot-3.png"
links: []
---

<div class="lang-en">

## Context

This project was developed during my internship to explore how machine learning can support lending decisions. The goal was to predict whether a customer is likely to repay a loan based on financial and credit-related features.

## Problem

- Loan approval decisions become risky when repayment behavior is hard to estimate
- Raw financial data needs preprocessing before it can be used effectively in machine learning
- A usable solution should not stop at model training and should also provide a practical interface for end users

## Solution

I built **Debt Repayment Prediction** as a complete prediction workflow:

- Prepared and cleaned customer loan data, including feature selection and normalization
- Trained and compared machine learning models for binary repayment prediction
- Used **Logistic Regression** as the final model thanks to its stable performance and clear output
- Developed a **Flask-based web interface** and supporting screens for prediction history and detailed result review

## Outcome

- Built an end-to-end machine learning application from dataset preparation to UI delivery
- Reached around **84% accuracy** during experiments
- Improved my practical skills in applied ML, financial data handling, and turning models into usable software

## Tech Stack

Python, Scikit-learn, Logistic Regression, Flask, PyQt5

</div>

<div class="lang-vi">

## Bối cảnh

Dự án này được thực hiện trong thời gian thực tập nhằm ứng dụng học máy vào bài toán hỗ trợ quyết định cho vay. Mục tiêu là dự đoán khả năng khách hàng có thể hoàn trả khoản vay dựa trên các đặc trưng tài chính và lịch sử tín dụng.

## Vấn đề

- Quyết định cho vay tiềm ẩn nhiều rủi ro khi khó ước lượng khả năng trả nợ của khách hàng
- Dữ liệu tài chính thực tế cần được tiền xử lý kỹ trước khi đưa vào mô hình học máy
- Một giải pháp hữu ích không chỉ dừng ở huấn luyện mô hình mà còn cần có giao diện để người dùng khai thác kết quả

## Giải pháp

Mình xây dựng **Debt Repayment Prediction** như một quy trình dự đoán hoàn chỉnh:

- Làm sạch và chuẩn hóa dữ liệu khoản vay, chọn các đặc trưng quan trọng cho mô hình
- Huấn luyện và so sánh nhiều mô hình học máy cho bài toán phân loại khả năng trả nợ
- Chọn **Logistic Regression** làm mô hình chính nhờ hiệu năng ổn định và đầu ra dễ diễn giải
- Phát triển **giao diện web bằng Flask** cùng các màn hình lịch sử dự đoán và xem chi tiết giao dịch

## Kết quả

- Hoàn thiện ứng dụng học máy end-to-end từ xử lý dữ liệu đến giao diện sử dụng
- Đạt độ chính xác khoảng **84%** trong quá trình thực nghiệm
- Củng cố kỹ năng về machine learning ứng dụng, xử lý dữ liệu tài chính và triển khai mô hình vào sản phẩm có thể sử dụng

## Tech Stack

Python, Scikit-learn, Logistic Regression, Flask, PyQt5

</div>
