import { MdAppRegistration } from "react-icons/md"

export const ModalRegister = () => {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="px-4 py-2 w-full justify-center flex items-center gap-2 font-bold lg:w-fit bg-red-500 text-white border border-gray-900 text-center duration-300 ease-in-out hover:scale-95 hover:bg-red-900" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <MdAppRegistration size={20} />
                Register Now
            </button>
            <dialog id="my_modal_3" className="modal modal-bottom !rounded-none sm:modal-middle">
                <div className="modal-box !rounded-none border border-gray-800">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <p>
                            Silakan lengkapi form dibawah ini untuk pendaftaran
                        </p>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form
                        action=""
                        className="flex flex-col gap-5 mt-5">
                        <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="" />
                        </label>
                        <label htmlFor="" className="-mb-2">Program:</label>
                        <select className="select select-bordered w-full rounded-none border-red-500">
                            <option disabled selected>Pilih program</option>
                            <option>Bekerja Sambil Kuliah</option>
                            <option>Magang di Jepang</option>
                            <option>Program Caregiver (Perawat)</option>
                            <option>Program Engineering</option>
                        </select>
                        <textarea id="" className="textarea rounded-none input-bordered border-red-500 placeholder-slate-800" placeholder="Pesan"></textarea>
                        <button className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                            Send
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    )
}