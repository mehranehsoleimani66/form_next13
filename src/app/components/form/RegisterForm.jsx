"use client";

import { Button, Form, Input, Select, Checkbox } from "antd";

const RegisterForm = () => {
  return (
    <div>
      <div className="text-4xl text-purple-950 font-bold px-10 py-10">
        CREATE NEW ACCOUNT
      </div>
      <main className="w-3/4   flex flex-col  justify-center  items-center m-auto border-[20px]  border-gray-400">
        <section className="w-full flex flex-col justify-start gap-10 items-start h-1/3 ">
          <div className="text-4xl w-full   h-28 bg-purple-950  text-white flex justify-start items-center pl-5 font-bold">
            {" "}
            YOUR DETAIL
          </div>
          <Form
            style={{
              width: "50%",
              paddingLeft: "40px",
            }}
          >
            <Form.Item
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  Full Name
                </label>
              }
              name="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input
                placeholder="Type your name"
                size="large"
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>
            <Form.Item
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  Full LastName
                </label>
              }
              name="Full LastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Full LastName!",
                },
              ]}
            >
              <Input
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>
          </Form>
        </section>

        <section className="w-full flex flex-col justify-start gap-10  items-start h-1/3 ">
          <div className="text-4xl w-full  h-28 bg-purple-950  text-white flex justify-start items-center pl-5 font-bold">
            SETUP YOUR ACCOUNT
          </div>
          <Form
            style={{
              width: "50%",
              paddingLeft: "40px",
            }}
          >
            <Form.Item
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  Email
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Type your email"
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  Password
                </label>
              }
              rules={[
                {
                  required: true,
                },
                { min: 6 },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Type your password"
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  confirm Password
                </label>
              }
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                placeholder="Confirm your password"
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>
            <Form.Item
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              name="website"
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  website
                </label>
              }
              rules={[{ type: "url", message: "Please enter a valid url" }]}
              hasFeedback
            >
              <Input
                placeholder="Add your website url"
                style={{
                  borderColor: "red",
                }}
              />
            </Form.Item>
            <Form.Item
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              name="Gender"
              label={
                <label style={{ color: "purple", fontWeight: 700 }}>
                  Gender
                </label>
              }
              requiredMark="optional"
            >
              <Select
                block="true"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                colon={false}
                placeholder="Select your gender"
              >
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </section>
        <section className="w-full flex flex-col justify-start gap-10  items-start h-1/3 ">
          <div className="text-4xl w-full  h-28 bg-purple-950  text-white flex justify-start items-center pl-5 font-bold">
            TERMS OF USE
          </div>
          <Form
            style={{
              width: "100%",
              paddingLeft: "40px",
            }}
          >
            <Form.Item
              name="agreement"
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              valuePropName="checked"
            >
              <Checkbox className="text-blue-700 text-base font-light px-10">
                <strong className="">
                  Yes, I would like to receive a monthly newsletter with fresh
                  learning tips, helpful advice and offers via email about
                  LearnEnglish and other activities, services and events
                  provided by the British Council.
                </strong>
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="agreement"
              block="true"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              colon={false}
              valuePropName="checked"
            >
              <Checkbox className="text-blue-700 text-base font-light px-10">
                <strong className="  font-sans">
                  I am 18 years old or above and I have read and accepted the
                </strong>
                <a
                  target="_blank"
                  className="underline pl-1 text-lg text-blue-700"
                >
                  Terms & Conditions
                </a>
              </Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button htmlType="submit">Register</Button>
            </Form.Item>
          </Form>
        </section>
      </main>
    </div>
  );
};

export default RegisterForm;
