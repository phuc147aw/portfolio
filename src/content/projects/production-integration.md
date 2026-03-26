---
title: "Production Integration"
description: "Designed and deployed an enterprise integration layer connecting ERP, CRM, and warehouse systems with real-time event-driven data synchronization."
pid: 3
date: 2025-05-10
title_vi: "Tích hợp hệ thống sản xuất"
description_vi: "Thiết kế và triển khai lớp tích hợp doanh nghiệp kết nối ERP, CRM và hệ thống kho bằng cơ chế đồng bộ dữ liệu thời gian thực theo hướng sự kiện."
slug: "production-integration"
ready: false
featured: false
tags: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker", "Enterprise"]
category: "integration"
image: "/images/projects/production-integration/logo.png"
# coverImage: "/images/projects/production-integration/cover.png"
# gallery:
#   - "/images/projects/production-integration/screenshot-1.png"
links:
  - label: "GitHub"
    url: "https://github.com/username/production-integration"
  - label: "Documentation"
    url: "https://docs.example.com"
---

<div class="lang-en">

## Context

A mid-size manufacturing company operated three disconnected systems: SAP for ERP, Salesforce for CRM, and a custom warehouse management system. Data flowed between them via nightly CSV exports and manual entry, creating delays, duplicates, and reconciliation headaches.

## Problem

- Order data took 24+ hours to propagate from CRM to warehouse, causing shipping delays
- Inventory levels in the ERP were always stale - sales team couldn't give accurate availability answers
- Manual data entry between systems caused a 5% error rate in order fulfillment
- No audit trail for data changes across systems - compliance risk for ISO certification

## Solution

I designed and built **Production Integration** as an event-driven middleware layer:

- **Event bus** using RabbitMQ for reliable, ordered message delivery between systems
- **Adapter pattern** with dedicated connectors for SAP (RFC), Salesforce (REST), and the warehouse API
- **Transformation engine** mapping fields between different data models with configurable rules
- **Idempotent processing** ensuring exactly-once delivery even during retries or system restarts
- **Real-time dashboards** showing sync status, error rates, and data flow volume
- **Dead letter queue** with automated retry and manual review workflow for failed messages
- **Docker-based deployment** with health checks and horizontal scaling support

Key decisions:
- Chose RabbitMQ over Kafka - the message volume (10k/day) didn't justify Kafka's complexity
- Built adapters as independent microservices - each can be deployed and scaled separately
- Implemented circuit breakers to prevent cascading failures when downstream systems are slow

## Outcome

- Reduced data propagation time from 24 hours to under 30 seconds
- Eliminated manual data entry - error rate dropped from 5% to 0.1%
- Full audit trail for all data changes - passed ISO 27001 audit on first attempt
- System handled Black Friday traffic (10x normal volume) without human intervention
- Architecture pattern reused for two additional integration projects in the company

## Tech Stack

Node.js, RabbitMQ, PostgreSQL, Docker, REST APIs, SAP RFC, Salesforce API

</div>

<div class="lang-vi">

## Bối cảnh

Một công ty sản xuất tầm trung đang vận hành ba hệ thống tách rời: SAP cho ERP, Salesforce cho CRM và một hệ thống quản lý kho tự xây dựng. Dữ liệu di chuyển giữa các hệ thống bằng file CSV chạy ban đêm và nhập tay, gây ra độ trễ, dữ liệu trùng lặp và rất khó đối soát.

## Vấn đề

- Dữ liệu đơn hàng mất hơn 24 giờ để đi từ CRM sang kho, gây chậm giao hàng
- Tồn kho trong ERP luôn trễ so với thực tế khiến đội sales không thể trả lời chính xác về khả năng cung ứng
- Nhập liệu thủ công giữa các hệ thống làm phát sinh tỷ lệ lỗi 5% trong xử lý đơn hàng
- Không có audit trail xuyên hệ thống cho thay đổi dữ liệu, tạo rủi ro tuân thủ với chứng nhận ISO

## Giải pháp

Mình thiết kế và xây dựng **Production Integration** như một lớp middleware hướng sự kiện:

- **Event bus dùng RabbitMQ** để đảm bảo truyền message đáng tin cậy và đúng thứ tự giữa các hệ thống
- **Mô hình adapter** với các connector riêng cho SAP (RFC), Salesforce (REST) và API kho
- **Engine chuyển đổi dữ liệu** để ánh xạ field giữa các mô hình dữ liệu khác nhau bằng rule có cấu hình
- **Xử lý idempotent** để đảm bảo tính ổn định khi retry hoặc khi hệ thống khởi động lại
- **Dashboard thời gian thực** hiển thị trạng thái đồng bộ, tỷ lệ lỗi và lưu lượng dữ liệu
- **Dead letter queue** hỗ trợ retry tự động và quy trình review thủ công cho message lỗi
- **Triển khai bằng Docker** với health check và khả năng scale ngang

Quyết định kỹ thuật chính:
- Chọn RabbitMQ thay vì Kafka vì lưu lượng khoảng 10k message mỗi ngày chưa cần đến độ phức tạp của Kafka
- Tách adapter thành các microservice độc lập để có thể triển khai và scale riêng
- Bổ sung circuit breaker để tránh lỗi lan truyền khi downstream chậm hoặc không ổn định

## Kết quả

- Giảm thời gian lan truyền dữ liệu từ 24 giờ xuống dưới 30 giây
- Loại bỏ nhập liệu thủ công, đưa tỷ lệ lỗi từ 5% xuống còn 0,1%
- Có đầy đủ audit trail cho mọi thay đổi dữ liệu và vượt qua audit ISO 27001 ngay lần đầu
- Hệ thống xử lý được lưu lượng Black Friday gấp 10 lần bình thường mà không cần can thiệp thủ công
- Mô hình kiến trúc này tiếp tục được tái sử dụng cho thêm hai dự án tích hợp khác trong công ty

## Tech Stack

Node.js, RabbitMQ, PostgreSQL, Docker, REST APIs, SAP RFC, Salesforce API

</div>
