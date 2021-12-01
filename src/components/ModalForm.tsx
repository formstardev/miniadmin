import { Button, Drawer, Form } from "antd";
import React, { FC, useEffect, useState } from "react";

interface ModalFormProps {
  title: string,
  initialValues: any;
  sending: boolean;
  onSubmit: (values: any) => void;
  onClose: () => void;
}

export const ModalForm: FC<ModalFormProps> = ({ title, initialValues, sending, onSubmit, onClose, children }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!initialValues);
  }, [initialValues]);

  function handleClose(visible?: boolean) {
    if (!visible) {
      onClose();
    }
  }
  return (
    <Drawer
      title={title}
      onClose={() => setIsVisible(false)}
      afterVisibleChange={handleClose}
      visible={isVisible}
      placement="bottom"
      footer={
        <div className="flex">
          <Button
            size="large"
            onClick={() => setIsVisible(false)}
            type="link"
            danger
            htmlType="button"
          >
            Cancelar
                  </Button>
          <div className="flex-1"></div>
          <Button
            form="form-company-form"
            size="large"
            type="primary"
            htmlType="submit"
            loading={sending}
            disabled={sending}
          >
            Salvar
                  </Button>
        </div>
      }
    >
      <Form
        id="form-company-form"
        layout="vertical"
        onFinish={onSubmit}
        // onFinishFailed={onSubmitFailed}
        // ref={formRef}
        // form={form}
        name="control-ref"
        initialValues={initialValues}
      >
        {children}
      </Form>
    </Drawer>
  );
}