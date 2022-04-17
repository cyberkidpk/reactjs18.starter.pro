import { notification } from 'antd';

const MessengingToaster = ({ type, message, description }) => {
  notification[type]({
    message: `${message}`,
    description: `${description}`,
  });
};

export { MessengingToaster };
