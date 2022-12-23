import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';
import ContentCategoryCreate from '../../../pages/dashboard/blog/category/ContentCategoryCreate';
import ContentCategoryEdit from '../../../pages/dashboard/blog/category/ContentCategoryEdit';
import ContentCategoryIndex from '../../../pages/dashboard/blog/category/ContentCategoryIndex';
import PostCreate from '../../../pages/dashboard/blog/post/PostCreate';
import PostEdit from '../../../pages/dashboard/blog/post/PostEdit';
import PostIndex from '../../../pages/dashboard/blog/post/PostIndex';
import Home from '../../../pages/dashboard/Home';
import CategoryCreate from '../../../pages/dashboard/shop/category/CategoryCreate';
import CategoryEdit from '../../../pages/dashboard/shop/category/CategoryEdit';
import CategoryIndex from '../../../pages/dashboard/shop/category/CategoryIndex';
import DeliveryCreate from '../../../pages/dashboard/shop/delivery/DeliveryCreate';
import DeliveryEdit from '../../../pages/dashboard/shop/delivery/DeliveryEdit';
import DeliveryIndex from '../../../pages/dashboard/shop/delivery/DeliveryIndex';
import AmazingCreate from '../../../pages/dashboard/shop/discount/amazing/AmazingCreate';
import AmazingEdit from '../../../pages/dashboard/shop/discount/amazing/AmazingEdit';
import AmazingIndex from '../../../pages/dashboard/shop/discount/amazing/AmazingIndex';
import CommonCreate from '../../../pages/dashboard/shop/discount/common/CommonCreate';
import CommonEdit from '../../../pages/dashboard/shop/discount/common/CommonEdit';
import CommonIndex from '../../../pages/dashboard/shop/discount/common/CommonIndex';
import CopanCreate from '../../../pages/dashboard/shop/discount/copan/CopanCreate';
import CopanEdit from '../../../pages/dashboard/shop/discount/copan/CopanEdit';
import CopanIndex from '../../../pages/dashboard/shop/discount/copan/CopanIndex';
import OrderIndex from '../../../pages/dashboard/shop/order/OrderIndex';
import PaymentIndex from '../../../pages/dashboard/shop/payment/PaymentIndex';
import ServiceCreate from '../../../pages/dashboard/shop/services/ServiceCreate';
import ServiceEdit from '../../../pages/dashboard/shop/services/ServiceEdit';
import ServiceIndex from '../../../pages/dashboard/shop/services/ServiceIndex';
import ServiceAttributeCreate from '../../../pages/dashboard/shop/services/service_attribute/ServiceAttributeCreate';
import ServiceAttributeEdit from '../../../pages/dashboard/shop/services/service_attribute/ServiceAttributeEdit';
import ServiceAttributeIndex from '../../../pages/dashboard/shop/services/service_attribute/ServiceAttributeIndex';
import ServiceAttributeValueCreate from '../../../pages/dashboard/shop/services/service_attribute_value/ServiceAttributeValueCreate';
import ServiceAttributeValueEdit from '../../../pages/dashboard/shop/services/service_attribute_value/ServiceAttributeValueEdit';
import ServiceAttributeValueIndex from '../../../pages/dashboard/shop/services/service_attribute_value/ServiceAttributeValueIndex';
import Header from './Header';

const Main = () => {
    const { isOpenSidebar } = useContext(IsOpenSideBar);

    return (
        <section className={isOpenSidebar ? 'flex flex-col gap-y-6 w-full md:w-4/5 lg:w-5/6 order-2 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[50px] main-cotainer py-2 px-4 lg:p-6' : 'flex flex-col gap-y-6 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[25px] myTransition py-2 px-4 lg:p-6 md:w-[95vw]'}>
            <Header />
            <Routes>
                <Route path='/dashboard/' element={<Home />} />
                {/* category routes start */}
                <Route path='/dashboard/category/' element={<CategoryIndex />} />
                <Route path='/dashboard/category/create' element={<CategoryCreate />} />
                <Route path='/dashboard/category/edit' element={<CategoryEdit />} />
                {/* category routes end */}
                {/* services routes start */}
                <Route path='/dashboard/service/' element={<ServiceIndex />} />
                <Route path='/dashboard/service/create' element={<ServiceCreate />} />
                <Route path='/dashboard/service/edit' element={<ServiceEdit />} />
                {/* services routes end */}
                {/* services attributes routes start */}
                <Route path='/dashboard/service/attributes' element={<ServiceAttributeIndex />} />
                <Route path='/dashboard/service/attributes/create' element={<ServiceAttributeCreate />} />
                <Route path='/dashboard/service/attributes/edit' element={<ServiceAttributeEdit />} />
                {/* services attributes routes end */}
                {/* services attributes values routes start */}
                <Route path='/dashboard/service/attributes/value' element={<ServiceAttributeValueIndex />} />
                <Route path='/dashboard/service/attributes/value/create' element={<ServiceAttributeValueCreate />} />
                <Route path='/dashboard/service/attributes/value/edit' element={<ServiceAttributeValueEdit />} />
                {/* services attributes values routes end */}
                {/* oeders routes start */}
                <Route path='/dashboard/orders/:status' element={<OrderIndex />} />
                {/* oeders routes end */}
                {/* payments routes start */}
                <Route path='/dashboard/payments/:type' element={<PaymentIndex />} />
                {/* payments routes end */}
                {/* amazing sales routes start */}
                <Route path='/dashboard/discounts/amazing-sales' element={<AmazingIndex />} />
                <Route path='/dashboard/discounts/amazing-sales/create' element={<AmazingCreate />} />
                <Route path='/dashboard/discounts/amazing-sales/edit' element={<AmazingEdit />} />
                {/* amazing sales routes end */}
                {/* common discount routes start */}
                <Route path='/dashboard/discounts/common' element={<CommonIndex />} />
                <Route path='/dashboard/discounts/common/create' element={<CommonCreate />} />
                <Route path='/dashboard/discounts/common/edit' element={<CommonEdit />} />
                {/* common discount routes end */}
                {/* copan discount routes start */}
                <Route path='/dashboard/discounts/copan' element={<CopanIndex />} />
                <Route path='/dashboard/discounts/copan/create' element={<CopanCreate />} />
                <Route path='/dashboard/discounts/copan/edit' element={<CopanEdit />} />
                {/* copan discount routes end */}
                {/* delivery routes start */}
                <Route path='/dashboard/delivery' element={<DeliveryIndex />} />
                <Route path='/dashboard/delivery/create' element={<DeliveryCreate />} />
                <Route path='/dashboard/delivery/edit' element={<DeliveryEdit />} />
                {/* delivery routes end */}
                {/* content category routes start */}
                <Route path='/dashboard/content/category/' element={<ContentCategoryIndex />} />
                <Route path='/dashboard/content/category/create' element={<ContentCategoryCreate />} />
                <Route path='/dashboard/content/category/edit' element={<ContentCategoryEdit />} />
                {/* content category routes end */}
                {/* possts routes start */}
                <Route path='/dashboard/content/post/' element={<PostIndex />} />
                <Route path='/dashboard/content/post/create' element={<PostCreate />} />
                <Route path='/dashboard/content/post/edit' element={<PostEdit />} />
                {/* posts routes end */}
            </Routes>
        </section>
    );
};

export default Main;