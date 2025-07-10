import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import type { Route } from './+types/home'
import { SubmitButton } from '~/components/submit-button'
import { A } from '~/components/ui/a'
import { FormDescription, FormField, FormFieldSet } from '~/components/ui/form'
import { Input } from '~/components/ui/input'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Energy Sage - Genesis' },
		{ name: 'description', content: 'Welcome to Energy Sage!' },
	]
}

const LoginSchema = z.object({
	username: z.string().min(1, 'Username is required!'),
	email: z.email('Invalid email!'),
	password: z.string().length(8, 'Password must be 8 letter!'),
})

type Login = z.infer<typeof LoginSchema>

export default function Home() {
	const { handleSubmit, control, register } = useForm<Login>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
		resolver: zodResolver(LoginSchema),
	})

	const submitHandler = (value: Login) => {
		console.log('rhf', value)
	}

	return (
		<div className="mx-auto grid max-w-sm items-center p-4">
			{/* React Hook Form */}
			<form onSubmit={handleSubmit(submitHandler)}>
				<FormFieldSet>
					<FormField<Login> name="username" label="Username" control={control}>
						<Input {...register('username')} />
					</FormField>

					<FormField<Login> name="password" label="Password" control={control}>
						<Input {...register('password')} />
						<FormDescription className="mt-2">
							<A href="#" variant="gray">
								Forget password?
							</A>
						</FormDescription>
					</FormField>

					<FormField<Login> name="email" label="Email" control={control}>
						<Input {...register('password')} />
					</FormField>

					<SubmitButton />
				</FormFieldSet>
			</form>
		</div>
	)
}
