import React, { Component   } from 'react'
import { Form, Icon, Input, Button, Checkbox , Select } from 'antd';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DataList from '../dataList'
import {getData} from '../../action/list'
import './styles.less'
const { Option } = Select;

export default @connect(state => {
  return {
    data:state.biaoDan.data
  }
},{
  getData
})

@Form.create({
  // 表单回填使用
  mapPropsToFields (props) {
    // console.log(props,123)
    const { username , age , sex , like , id} = props.data
    return {
      username: Form.createFormField({
        value: username,
      }),
      age: Form.createFormField({
        value: age,
      }),
      sex: Form.createFormField({
        value: sex,
      }),
      like: Form.createFormField({
        value: like,
      }),
      id: Form.createFormField({
        // 必须是 value
        value: id,
      }),
    }
  },
})


class FormList extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getData(values)
        console.log('Received values of form: ', values);
        //表单清空
        this.props.form.resetFields()
      }
    });
  };
  render() {
    //双向绑定
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form  labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}
         onSubmit={this.handleSubmit} className="login-form">
          <Form.Item
          label="用户名">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item
          label="年龄">
            {getFieldDecorator('age', {
              rules: [{ required: true, message: '年龄不能为空' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入年龄"
              />,
            )}
          </Form.Item>

          <Form.Item label="性别">
            {getFieldDecorator('sex', {
              rules: [{ required: true, message: '请选择一个性别' }],
            })(
              <Select placeholder="请选择性别">
                <Option value="男">男</Option>
                <Option value="女">女</Option>
              </Select>,
            )}
          </Form.Item>
          
          <Form.Item label="爱好">
            {getFieldDecorator('like', {
              rules: [{ required: true, message: '请选择一个爱好' }],
            })(
              <Select placeholder="请选择爱好">
                <Option value="篮球">篮球</Option>
                <Option value="足球">足球</Option>
                <Option value="乒乓球">乒乓球</Option>
                <Option value="羽毛球">羽毛球</Option>
              </Select>,
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('id')(
              <Input
                type="hidden"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              增加
            </Button>
            
          </Form.Item>
        </Form>
        <p style={{fontSize:'80px',color:'blue'}}><NavLink to="/list">LIst</NavLink></p>
        <DataList />
      </div>
    )
  }
}
