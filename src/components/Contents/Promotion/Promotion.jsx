import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker } from "antd";
const { RangePicker } = DatePicker;

const Promotion = () => {
  return (
    <div className="ml-[180px] mt-[100px]">
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
      >
        <Form.Item label="Thêm mã khuyến mãi">
          <Input />
        </Form.Item>

        <Form.Item label="Hạn sử dụng">
          <RangePicker />
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary">Tạo </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Promotion;
