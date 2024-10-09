import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons'
import { useState } from "react";
import { cn } from '@/shared/lib';
import { useToast } from '@/shared/model/hooks/use-toast';
import { Input, Button, Checkbox } from "@/shared/ui";
import { useFormValidation, submitForm } from "../model/actions";
export function TestForm() {
  const { userName, userPhone, isAgreed, errors, handleNameChange, handlePhoneChange, handleAgreementChange } = useFormValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!errors.userName && !errors.userPhone && isAgreed) {
      setIsSubmitting(true);
      await submitForm({ userName, userPhone })
        .then((response) => {
          console.log(response)
          toast({
            title: `Спасибо, ${response.formData.userName}, форма успешно отправлена.`,
            description: `Дата и время отправки: ${new Date().toLocaleString("ru")}`,
          })
        }).catch(() => {
          toast({
            variant: "destructive",
            title: `Что-то пошло не так, попробуйте еще раз.`,
            description: `Дата и время отправки: ${new Date().toLocaleString("ru")}`,

          })
        })
      setIsSubmitting(false);
    } else {
      handleNameChange(userName);
      handlePhoneChange(userPhone);
      handleAgreementChange(isAgreed);
    }
  };

  return (
    <div className="py-20 space-y-11" id="testForm">
      <h2 className="text-center max-md:text-h4">Отправь форму</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-12 xs:gap-5 md:gap-6 lg:gap-8">
        <Input
          value={userName}
          onChange={(e) => handleNameChange(e.target.value)}
          className={cn(
            "xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4 pr-6",
            errors.userName && "!border-destructive"
          )}
          placeholder="Имя"
          suffix={
            errors.userName || !userName ? <Cross2Icon className="p-0.5 size-5 absolute right-4 top-0 bottom-0 self-center rounded-full bg-destructive text-white" /> : <CheckIcon className="size-5 absolute right-4 top-0 bottom-0 self-center bg-secondary text-white rounded-full" />
          }
          errorMessage={errors.userName}
        />

        <Input
          value={userPhone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className={cn(
            "xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4 pr-6",
            errors.userPhone && "!border-destructive"
          )}
          type='tel'
          placeholder="Телефон"
          suffix={
            errors.userPhone || !userPhone ? <Cross2Icon className="p-0.5 size-5 absolute right-4 top-0 bottom-0 self-center rounded-full bg-destructive text-white" /> : <CheckIcon className="size-5 absolute right-4 top-0 bottom-0 self-center bg-secondary text-white rounded-full" />
          }
          errorMessage={errors.userPhone}
        />

        <div className="xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4 flex gap-4 relative">
          <Checkbox
            checked={isAgreed}
            onClick={() => handleAgreementChange(!isAgreed)}
            className={cn(
              "my-0.5",
              errors.isAgreed && "border-destructive"
            )}
          />
          <p className="text-[16px]/[28px] self-start">Согласен, отказываюсь</p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4 !text-h5 text-primary-foreground"
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
}
