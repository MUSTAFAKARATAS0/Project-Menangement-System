import React from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Loading from './Loader';
import ModalWrapper from './ModalWrapper';
import Textbox from './Textbox';
import { useChangePasswordMutation } from '../redux/slice/api/userApiSlice';
import { toast, ToastContainer } from "react-toastify";

const ChangePassword = ({ open, setOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [changeUserPassword, { isLoading }] = useChangePasswordMutation();

    const handleOnSubmit = async (data) => {
        if (data.password !== data.cpass) {
            toast.warning("Password doesn't match ");
            return;
        }
        try {
            const res = await changeUserPassword(data).unwrap();
            toast.success("New user added successfully");

            setTimeout(() => {
                setOpen(false);
            }, 1500);
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || error.error);
        }
    };

    return (
        <ModalWrapper open={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Dialog.Title as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
                    Change Password
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-6">
                    <Textbox
                        placeHolder="New Password"
                        type="password"
                        name="password"
                        label="New Password"
                        className="w-full rounded"
                        register={register("password", {
                            required: "New password required",
                        })}
                        error={errors.password && errors.password.message}
                    />

                    <Textbox
                        placeHolder="Confirm New Password"
                        type="password"
                        name="cpass"
                        label="Confirm New Password"
                        className="w-full rounded"
                        register={register("cpass", {
                            required: "Confirm new password required",
                        })}
                    />
                </div>

                {isLoading ? (
                    <div className="py-5">
                        <Loading />
                    </div>
                ) : (
                    <div className="py-3 mt-4 sm:flex-row-reverse">
                        <Button
                            type="submit"
                            label="Save"
                            className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700"
                        />

                        <Button
                            type="submit" 
                            className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                            onClick={() => setOpen(false)} 
                        />
                    </div>
                )}
            </form>
        </ModalWrapper>
    );
};

export default ChangePassword;
