import { Bounded } from "../../components/Bounded";
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Bounded as="section" size="small">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6"
      >
        <label htmlFor="firstname">
          <span className="text-sm text-slate-500">First name</span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            id='firstname'
            autoComplete='off'
            {...register(
              'firstname',
              {
                required: {
                  value: true,
                  message: 'First name is required*'
                }
              }
            )}
          />
          {errors?.firstname && <span className='text-[red]'>{errors?.firstname?.message}</span>}
        </label>
        <label htmlFor="lastname">
          <span className="text-sm text-slate-500">Last name</span>
          <input
            type="text"
            placeholder="Last name"
            className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            id='lastname'
            autoComplete='off'
            {...register(
              'lastname',
              {
                required: {
                  value: true,
                  message: 'Last name is required*'
                }
              }
            )}
          />
          {errors?.lastname && <span className='text-[red]'>{errors?.lastname?.message}</span>}
        </label>
        <label htmlFor="email">
          <span className="text-sm text-slate-500">Email</span>
          <input
            type="text"
            className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            placeholder='Email'
            id='email'
            autoComplete='off'
            {...register(
              'email',
              {
                required: {
                  value: true,
                  message: 'Email address is required*'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                }
              }
            )}
          />
          {errors?.email && <span className='text-[red]'>{errors?.email?.message}</span>}
        </label>
        <label htmlFor="password">
          <span className="text-sm text-slate-500">Password</span>
          <input
            type="password"
            className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            placeholder='Password'
            id='password'
            autoComplete='off'
            {...register(
              'password',
              {
                required: {
                  value: true,
                  message: 'Password is required*'
                },
                minLength: {
                  value: 8,
                  message: 'The length must be bigger than 8'
                },
                maxLength: {
                  value: 30,
                  message: 'The length must be smaller than 30'
                }
              }
            )}
          />
          {errors?.password && <span className='text-[red]'>{errors?.password?.message}</span>}
        </label>
        <button
          type='submit'
          className="ml-auto inline-flex items-center gap-2"
        >
          Register{" "}
          <span aria-hidden={true} className="text-xl">
            &rarr;
          </span>
        </button>
      </form>
    </Bounded>
  );
};
export default SignUpForm