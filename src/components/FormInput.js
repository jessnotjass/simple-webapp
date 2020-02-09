import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Icon, Input } from 'antd'

const Item = styled(Form.Item)`
  margin: 5px;
`

const FormInput = ({
  name,
  placeholder,
  icon,
  errors,
  value,
  onChange,
  onBlur,
  isSubmitting,
  type
}) => {
  return (
    <Item
      hasFeedback
      validateStatus={errors ? 'error' : ''}
      help={errors}>
      <Input
        name={name}
        prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isSubmitting}
        type={type}
      />
    </Item>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  errors: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

export default FormInput
