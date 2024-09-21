import { Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Button } from "@/shared/ui";
import { Label } from "@radix-ui/react-label";
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function SignUpForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordState, setPasswordSate] = useState('')

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordSate(event.target.value);
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="password">Password</Label>
            <Input id="password" value={passwordState} onChange={passwordHandler} type={passwordVisible ? 'text' : 'password'} />
            <button className="absolute right-3 top-[50%]" style={{ visibility: passwordState ? 'visible' : 'hidden' }} onClick={togglePasswordVisibility}>
              {passwordVisible ? <EyeIcon className="size-5" /> : <EyeOffIcon className="size-5" />}
            </button>
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="../login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

