import { MdAppRegistration } from "react-icons/md"
import { RegisterForm } from "./RegisterForm"

export const ModalRegister = () => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="px-4 py-2 w-full justify-center flex items-center gap-2 font-bold lg:w-fit bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <MdAppRegistration size={20} />
                Register Now
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box !rounded-none border border-gray-800 w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <p className="text-xl !capitalize">
                            PENDAFTARAN PROGRAM PELATIHAN KERJA KE JEPANG LPK HIDAMARI KENSHU SENTA
                        </p>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <RegisterForm />
                </div>
            </dialog>
        </>
    )
}