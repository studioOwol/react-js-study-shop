import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  const userEmail = {
    required: '필수 필드입니다.',
  };

  const userPassword = {
    required: '필수 필드입니다.',
    minLength: {
      value: 4,
      message: '최소 4자입니다.',
    },
    maxLength: {
      value: 13,
      message: '최대 13자입니다.',
    },
    pattern: {},
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type='email'
          placeholder='E-mail'
          {...register('email', userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors.email.message}</span>
          </div>
        )}
      </div>
      <div>
        <input
          type='password'
          placeholder='Password'
          {...register('password', userPassword)}
        />
        {errors?.password && (
          <div>
            <span className={styles.form_error}>{errors.password.message}</span>
          </div>
        )}
      </div>
      <button type='submit'>{title}</button>
      <span className={styles.form_error}></span>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
