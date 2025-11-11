import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LabelProps from '../components/LabelProps'
import { useFormik } from 'formik'
import * as yup from 'yup'
const ChangePassword = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLoader = () => {
        setTimeout(() => {
            if (loading) {
                setLoading(true)
                setSaved(false)
            } else {
                setLoading(false)
                setSaved(true)
            }

        }, 2000)
    }

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        onSubmit: async (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            oldPassword: yup
                .string()
                .required("Password is required!")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/,
                    "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character"
                ),
            newPassword: yup
                .string()
                .required("New password is required!")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/,
                    "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character"
                ),
            confirmNewPassword: yup
                .string()
                .required("Please confirm your new password")
                .oneOf([yup.ref("newPassword")], "Password must match new password!"),
            agree: yup
                .boolean()
                .oneOf([true], "You must accept the Terms & Conditions"),
        }),
    });


    return (
        <div className='max-w-md mx-auto mt-10 px-4'>
            <div className="flex w-full items-center pb-5 mb-4 px-3">
                <img
                    className='cursor-pointer'
                    onClick={() => navigate(-1)}
                    src="./Arrow Left.svg" alt="arrow left"
                />
                <h1 className="font-bold text-lg md:text-xl w-full text-center">
                    Change Password
                </h1>
            </div>

            <hr className="border border-gray-100" />

            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-10 mt-8">

                <div>
                    <div className={`border rounded-2xl border-pink-200 relative flex justify-center gap-2 flex-col h-12 px-2
                        ${formik.errors.oldPassword && formik.touched.oldPassword ?
                            'border border-red-500' :
                            'border border-gray-200'
                        }
                        `}>
                        <input
                            className='outline-none peer px-2'
                            type="password"
                            name='oldPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.oldPassword}
                        />
                        <label
                            className={`text-pink-200 text-sm absolute bg-white peer-focus:-top-5 peer-focus:text-sm transition-all
                        pointer-events-none left-2 p-2 lg:text-base 
                        ${formik.errors.oldPassword && formik.touched.oldPassword ?
                                    'text-red-500' :
                                    'text-gray-200'
                                }
                        `}
                            htmlFor="account-password">Old Password
                        </label>
                    </div>
                    {formik.touched.oldPassword ? <small className="text-red-500 text-[12px] md:text-sm">{formik.errors.oldPassword}</small> : ''}
                </div>

                <div>
                    <div className={`border rounded-2xl border-pink-200 relative flex justify-center gap-2 flex-col h-12 px-2
                        ${formik.errors.newPassword && formik.touched.newPassword ?
                            'border border-red-500' :
                            'border border-gray-200'
                        }
                        `}>
                        <input
                            className='outline-none peer px-2'
                            type="password"
                            name='newPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.newPassword}
                        />
                        <label
                            className={`text-pink-200 text-sm absolute bg-white peer-focus:-top-5 peer-focus:text-sm transition-all
                        pointer-events-none left-2 p-2 lg:text-base 
                        ${formik.errors.newPassword && formik.touched.newPassword ?
                                    'text-red-500' :
                                    'text-gray-200'
                                }
                        `}
                            htmlFor="account-password">New Password
                        </label>
                    </div>
                    {formik.touched.newPassword ? <small className="text-red-500 text-[12px] md:text-sm">{formik.errors.newPassword}</small> : ''}
                </div>

                <div>
                    <div className={`border rounded-2xl border-pink-200 relative flex justify-center gap-2 flex-col h-12 px-2
                        ${formik.errors.confirmNewPassword && formik.touched.confirmNewPassword ?
                            'border border-red-500' :
                            'border border-gray-200'
                        }
                        `}>
                        <input
                            className='outline-none peer px-2'
                            type="password"
                            name='confirmNewPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmNewPassword}
                        />
                        <label
                            className={`text-pink-200 text-sm absolute bg-white peer-focus:-top-5 peer-focus:text-sm transition-all
                        pointer-events-none left-2 p-2 lg:text-base 
                        ${formik.errors.confirmNewPassword && formik.touched.confirmNewPassword ?
                                    'text-red-500' :
                                    'text-gray-200'
                                }
                        `}
                            htmlFor="account-password">Confirm New Password
                        </label>
                    </div>
                    {formik.touched.confirmNewPassword ? <small className="text-red-500 text-[12px] md:text-sm">{formik.errors.confirmNewPassword}</small> : ''}
                </div>

                <button
                    onClick={handleLoader}
                    disabled={loading || saved}
                    className={` w-full py-3 rounded-2xl text-white font-medium 
                    ${saved ? "bg-pink-300 cursor-not-allowed" : "bg-palevioletred cursor-pointer"}
                    `}>
                    {loading ? "Saving..." : saved ? "Saved" : "Save"}
                </button>
            </form>

        </div>
    )
}

export default ChangePassword