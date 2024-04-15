import { MAIL } from "../../../MAIL"

export const RegisterForm = () => {
    return (
        <>
            <form
                action={`https://formsubmit.co/${MAIL}`}
                method={'POST'}
                className="flex flex-col gap-5 mt-5"
                enctype="multipart/form-data"
            >
                <input type="hidden" name="_subject" value="Registrasi Baru"></input>
                <input type="hidden" name="_autoresponse" value="Terimakasih sudah mengisi form, agent kami akan segera menghubungimu :)"></input>
                <input type="hidden" name="_template" value="box" />

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Nama Lengkap
                    <input name="nama_lengkap" type="text" className="grow" placeholder="" />
                </label>
                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Email
                    <input name="email" type="email" className="grow" placeholder="" />
                </label>
                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Tanggal Lahir
                    <input name="tanggal_lahir" type="date" className="grow" placeholder="" />
                </label>
                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    No Handphone
                    <input name="no_handphone" type="number" className="grow" placeholder="" />
                </label>

                <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                    <p>
                        Jenis Kelamin :
                    </p>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="gender" value={'L'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">Lelaki</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="gender" value={'P'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">Perempuan</span>
                        </label>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                    <p>
                        Status :
                    </p>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="status-menikah" value={'Menikah'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">Menikah</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="status-menikah" value={'Belum Menikah'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">Belum Menikah</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="status-menikah" value={'Cerai'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">Cerai</span>
                        </label>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                    <p>
                        Golongan Darah :
                    </p>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="golongan_darah" value={'A'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">A</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="golongan_darah" value={'B'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">B</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="golongan_darah" value={'AB'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">AB</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="golongan_darah" value={'O'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">O</span>
                        </label>
                    </div>
                </div>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Berat Badan
                    <input name="berat_badan" type="number" className="grow" placeholder="" />
                </label>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Tinggi Badan
                    <input name="tinggi_badan" type="text" className="grow" placeholder="" />
                </label>

                <p className="-mb-3">
                    Riwayat ke Luar Negri :
                </p>
                <div className="inline-block lg:hidden form-control w-fit">
                            <label className="label cursor-pointer">
                                <input type="radio" name="Gender" value={'Belum Pernah'} className="radio checked:bg-red-500 border-red-600 border" />
                                <span className="label-text ml-2">Belum Pernah</span>
                            </label>
                        </div>
                        <div className="inline-block lg:hidden form-control w-fit">
                            <label className="label cursor-pointer">
                                <input type="radio" name="Gender" value={'Pernah'} className="radio checked:bg-red-500 border-red-600 border" />
                                <span className="label-text ml-2">Pernah</span>
                            </label>
                        </div>
                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                        <div className="hidden lg:inline-block form-control w-fit">
                            <label className="label cursor-pointer">
                                <input type="radio" name="Gender" value={'Belum Pernah'} className="radio checked:bg-red-500 border-red-600 border" />
                                <span className="label-text ml-2">Belum Pernah</span>
                            </label>
                        </div>
                        <div className="hidden lg:inline-block form-control w-fit">
                            <label className="label cursor-pointer">
                                <input type="radio" name="Gender" value={'Pernah'} className="radio checked:bg-red-500 border-red-600 border" />
                                <span className="label-text ml-2">Pernah</span>
                            </label>
                        </div>
                    </div>
                    <input type="text" className="grow placeholder:text-red-300" placeholder="Jika pernah tuliskan negara yang pernah dikunjungi dan berapa lama" />
                </label>

                <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                    <p>
                        Pendidikan Terakhir :
                    </p>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="lulusan" value={'SMA'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">SMA</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="lulusan" value={'SMK'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">SMK</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="lulusan" value={'D3'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">D3</span>
                        </label>
                    </div>
                    <div className="form-control w-fit">
                        <label className="label cursor-pointer">
                            <input type="radio" name="lulusan" value={'S1'} className="radio checked:bg-red-500 border-red-600 border" />
                            <span className="label-text ml-2">S1</span>
                        </label>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
                        <div className="form-control w-full">
                            <div className="flex items-center">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="lulusan" value="lulusan_lainnya" className="radio checked:bg-red-500 border-red-600 border" />
                                </label>
                                <input type="text" id="lainnyaInput" name="lulusan_lainnya" className="border-b border-b-red-500 px-2 py-1 ml-2" placeholder="Masukkan lulusan lainnya" />
                            </div>
                        </div>
                    </div>
                </div>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Riwayat Pendidikan
                    <input type="text" name="riwayat_pendidikan" className="grow" placeholder="" />
                </label>
                <p className="-mt-5 text-gray-500">
                    *SERTAKAN TAHUN, BULAN MASUK DAN LULUS, CUKUP DARI SLTA
                </p>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    NIK
                    <input type="text" name="nik" className="grow" placeholder="" />
                </label>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Tempat Kelahiran
                    <input type="text" name="tempat_kelahiran" className="grow" placeholder="" />
                </label>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Alamat Lengkap
                    <input type="text" name="alamat_lengkap" className="grow" placeholder="" />
                </label>

                <label className="input rounded-none input-bordered border-red-500 flex items-center gap-2">
                    Pengalaman Kerja
                    <input type="text" name="pengalaman_kerja" className="grow" placeholder="" />
                </label>
                <p className="-mt-5 text-gray-500">
                    *SERTAKAN NAMA PERUSAHAAN, JABATAN, TAHUN MASUK DAN KELUAR
                </p>

                <label htmlFor="" className="-mb-2">Program:</label>
                <select name="program" className="select select-bordered w-full rounded-none border-red-500">
                    <option disabled selected>Pilih program</option>
                    <option value={'Program Caregiver (Perawat Lansia)'}>Program Caregiver (Perawat)</option>
                    <option value={'Program Pekerja Berketrampilan Khusus (SSW)'}>Program Pekerja Berketrampilan Khusus (SSW)</option>
                    <option value={'Magang di Jepang'}>Magang di Jepang</option>
                    <option value={'Program Engineering'}>Program Engineering</option>
                    <option value={'Bekerja Sambil Kuliah'}>Bekerja Sambil Kuliah</option>
                </select>

                <p className="-mb-3">
                    Upload Foto KTP
                </p>
                <input required name="attachment_ktp" type="file" className="file-input file-input-bordered w-full rounded-none file-input-error border-red-500" />

                <p className="-mb-3">
                    Upload Foto Kartu Keluarga
                </p>
                <input required name="attachment_kk" type="file" className="file-input file-input-bordered w-full rounded-none file-input-error border-red-500" />

                <p className="-mb-3">
                    Upload Foto Formal 3 Bulan Terakhir
                </p>
                <input required name="attachment_foto_formal" type="file" className="file-input file-input-bordered w-full rounded-none file-input-error border-red-500" />

                <button className="btn bg-red-500 text-white rounded-none hover:bg-red-600">
                    Send
                </button>
            </form>
        </>
    )
}