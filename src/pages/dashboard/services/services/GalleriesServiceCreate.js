import React, { useEffect, useState, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
import { getServiceGalleries, getService, setServiceGallery, removeServiceGallery } from '../../../../service/dashboard/services/Service';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import ToastAlert from '../../../../components/dashboard/main/ToastAlert';

const GalleriesServiceCreate = () => {
    const params = useParams();
    const [errors, setErrors] = useState([]);
    const [service, setService] = useState([]);
    const [galleries, setGalleries] = useState([]);
    const [deleteTooltip, setDeleteTooltip] = useState(false);
    const [image, setImage] = useState(null);
    const [trashBox, setTrashBox] = useState({ isShow: false, id: false })
    const { message , setMessage } = useContext(Message);
    const navigate = useNavigate();
    const modalTrash = useRef();

    const closeModal = (e) => {
        if (modalTrash.current && trashBox.isShow && !modalTrash.current.contains(e.target)) {
            setTrashBox({ isShow: false, id: false })
        }
    }

    document.addEventListener('mousedown', closeModal);

    const imgUpload = (e) => {
        let file = e.target.files[0];
        let preview = document.getElementById('uploaded')
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }
        reader.addEventListener("load", function () {
            preview.src = reader.result;
        })
        setImage(file);
    }

    const submit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("service_id", params.id);
        const response = await setServiceGallery(formData);
        if (response.status === 'success') {
            setMessage(response.message);
            navigate("/dashboard/service/service/");
        } else {
            setErrors(response)
        }
    }

    const deleteImage = async (id) => {
        const response = await removeServiceGallery(id);
        setTrashBox({ isShow: false, id: false })
        if (response.status === 'success') {
            setGalleries(await getServiceGalleries(params.id))
            navigate(`/dashboard/service/gallery/${params.id}`);
            setMessage(response.message);
        } else {
            setMessage('عدم برقراری ارتباط با سرور');
        }
    }

    useEffect(() => {
        const service = async () => {
            let response = await getService(params.id);
            setService(response);
        }
        const serviceGalleries = async () => {
            let serviceAttributes = await getServiceGalleries(params.id);
            setGalleries(serviceAttributes);
        }

        service();
        serviceGalleries();
        if (message) toast(message);

        return () => { setMessage('') }
    }, [params , setMessage , message])

    return (
        <div className='flex flex-col items-center gap-y-4 px-4 relative'>
             {/* toast alert start */}
             <ToastAlert />
            {/* toast alert end */}
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/service/'>خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>گالری خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'><span>گالری خدمات - </span><span className='font-bold text-cyan-700 dark:text-cyan-400'>{service.name}</span></p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post" encType='multipart/form-data'>
                {
                    galleries.map(gallery => (
                        <div key={nanoid()} className="border-gallery group">
                            <img src={gallery.image} alt={gallery.service_name} />
                            <span onClick={(e) => setTrashBox({ isShow: true, id: gallery.id })} className='hidden group-hover:flex absolute top-2 left-2 group'>
                                <FontAwesomeIcon onMouseLeave={() => { setDeleteTooltip(false) }} onMouseMove={() => { setDeleteTooltip(true) }} icon={['fas', 'trash-alt']} className='text-red-600 hover:rotate-12 hover:scale-125 mytransition' />
                                {deleteTooltip && <span className='absolute top-4 left-4 flex justify-center items-center text-xs w-24 bg-zinc-700 py-1 px-3 rounded-md text-zinc-200'>حذف تصویر</span>}
                            </span>
                        </div>
                    ))
                }
                {/* image */}
                <div className="border-gallery flex justify-center items-center">
                    <label htmlFor='image' className='relative group'>
                        <FontAwesomeIcon icon={['fas', 'plus']} size='3x' className='dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-purple-400' />
                        <span className='absolute top-10 hidden group-hover:flex justify-center items-center text-xs w-24 bg-zinc-700 py-1 px-3 rounded-md text-zinc-200'>افزودن تصویر</span>
                        <input id='image' onChange={e => imgUpload(e)} type='file' name='image' className='hidden' />
                    </label>
                </div>
                {errors.image && <div className='error-validation mt-4'>{errors.image}</div>}
                <div className={image ? "border-gallery" : "hidden"}>
                    <img id='uploaded' src='' alt='uploaded' />
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
            {/* trash modal start */}
            {trashBox.isShow &&
                <span className='absolute' ref={modalTrash}>
                    <div className='border border-purple-400 rounded-lg shadow-2xl p-6 bg-purple-200 dark:bg-dark-600 flex flex-col gap-y-4'>
                        <p className='text-sm dark:text-purple-300'>آیا از حذف آیتم مورد نظر مطمئن هستید ؟</p>
                        <div className='flex justify-center items-center gap-x-4'>
                            <button onClick={(e) => deleteImage(trashBox.id)} type='button' className='flex justify-center items-center gap-x-4 bg-rose-600 text-white rounded-md py-2 px-4'>
                                <FontAwesomeIcon icon={['fas', 'trash']} />
                                <span>حذف شود</span>
                            </button>
                            <button onClick={() => setTrashBox({ isShow: false, id: false })} type='button' className='flex justify-center items-center gap-x-4 bg-lime-600 text-white rounded-md py-2 px-4'>
                                <FontAwesomeIcon icon={['fas', 'times']} />
                                <span>لغو</span>
                            </button>
                        </div>
                    </div>
                </span>
            }
        </div>
    );
};

export default GalleriesServiceCreate;