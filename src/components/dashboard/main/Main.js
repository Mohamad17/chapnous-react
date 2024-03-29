import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';
import BannerCreate from '../../../pages/dashboard/blog/banner/BannerCreate';
import BannerEdit from '../../../pages/dashboard/blog/banner/BannerEdit';
import BannerIndex from '../../../pages/dashboard/blog/banner/BannerIndex';
import ContentCategoryCreate from '../../../pages/dashboard/blog/category/ContentCategoryCreate';
import ContentCategoryEdit from '../../../pages/dashboard/blog/category/ContentCategoryEdit';
import ContentCategoryIndex from '../../../pages/dashboard/blog/category/ContentCategoryIndex';
import CommentIndex from '../../../pages/dashboard/blog/comment/ CommentIndex';
import CommnetShow from '../../../pages/dashboard/blog/comment/CommnetShow';
import FaqCreate from '../../../pages/dashboard/blog/faq/FaqCreate';
import FaqEdit from '../../../pages/dashboard/blog/faq/FaqEdit';
import FaqIndex from '../../../pages/dashboard/blog/faq/FaqIndex';
import PostCreate from '../../../pages/dashboard/blog/post/PostCreate';
import PostEdit from '../../../pages/dashboard/blog/post/PostEdit';
import PostIndex from '../../../pages/dashboard/blog/post/PostIndex';
import PostShow from '../../../pages/dashboard/blog/post/PostShow';
import Home from '../../../pages/dashboard/Home';
import SettingEdit from '../../../pages/dashboard/setting/SettingEdit';
import SettingIndex from '../../../pages/dashboard/setting/SettingIndex';
import CategoryCreate from '../../../pages/dashboard/services/category/CategoryCreate';
import CategoryEdit from '../../../pages/dashboard/services/category/CategoryEdit';
import CategoryIndex from '../../../pages/dashboard/services/category/CategoryIndex';
import DeliveryCreate from '../../../pages/dashboard/services/delivery/DeliveryCreate';
import DeliveryEdit from '../../../pages/dashboard/services/delivery/DeliveryEdit';
import DeliveryIndex from '../../../pages/dashboard/services/delivery/DeliveryIndex';
import AmazingCreate from '../../../pages/dashboard/services/discount/amazing/AmazingCreate';
import AmazingEdit from '../../../pages/dashboard/services/discount/amazing/AmazingEdit';
import AmazingIndex from '../../../pages/dashboard/services/discount/amazing/AmazingIndex';
import CommonCreate from '../../../pages/dashboard/services/discount/common/CommonCreate';
import CommonEdit from '../../../pages/dashboard/services/discount/common/CommonEdit';
import CommonIndex from '../../../pages/dashboard/services/discount/common/CommonIndex';
import CopanCreate from '../../../pages/dashboard/services/discount/copan/CopanCreate';
import CopanEdit from '../../../pages/dashboard/services/discount/copan/CopanEdit';
import CopanIndex from '../../../pages/dashboard/services/discount/copan/CopanIndex';
import OrderIndex from '../../../pages/dashboard/services/order/OrderIndex';
import PaymentIndex from '../../../pages/dashboard/services/payment/PaymentIndex';
import ServiceCreate from '../../../pages/dashboard/services/services/ServiceCreate';
import ServiceEdit from '../../../pages/dashboard/services/services/ServiceEdit';
import ServiceIndex from '../../../pages/dashboard/services/services/ServiceIndex';
import ServiceAttributeCreate from '../../../pages/dashboard/services/services/service_attribute/ServiceAttributeCreate';
import ServiceAttributeEdit from '../../../pages/dashboard/services/services/service_attribute/ServiceAttributeEdit';
import ServiceAttributeIndex from '../../../pages/dashboard/services/services/service_attribute/ServiceAttributeIndex';
import ServiceAttributeValueCreate from '../../../pages/dashboard/services/services/service_attribute_value/ServiceAttributeValueCreate';
import ServiceAttributeValueEdit from '../../../pages/dashboard/services/services/service_attribute_value/ServiceAttributeValueEdit';
import ServiceAttributeValueIndex from '../../../pages/dashboard/services/services/service_attribute_value/ServiceAttributeValueIndex';
import AdminTicketIndex from '../../../pages/dashboard/ticket/admin-ticket/AdminTicketIndex';
import CategoryTicketCreate from '../../../pages/dashboard/ticket/category-ticket/CategoryTicketCreate';
import CategoryTicketEdit from '../../../pages/dashboard/ticket/category-ticket/CategoryTicketEdit';
import CategoryTicketIndex from '../../../pages/dashboard/ticket/category-ticket/CategoryTicketIndex';
import PriorityTicketCreate from '../../../pages/dashboard/ticket/priority-ticket/PriorityTicketCreate';
import PriorityTicketEdit from '../../../pages/dashboard/ticket/priority-ticket/PriorityTicketEdit';
import PriorityTicketIndex from '../../../pages/dashboard/ticket/priority-ticket/PriorityTicketIndex';
import TicketIndex from '../../../pages/dashboard/ticket/TicketIndex';
import AdminCreate from '../../../pages/dashboard/user/admin/AdminCreate';
import AdminEdit from '../../../pages/dashboard/user/admin/AdminEdit';
import AdminIndex from '../../../pages/dashboard/user/admin/AdminIndex';
import CustomerCreate from '../../../pages/dashboard/user/customer/CustomerCreate';
import CustomerEdit from '../../../pages/dashboard/user/customer/CustomerEdit';
import CustomerIndex from '../../../pages/dashboard/user/customer/CustomerIndex';
import Header from './Header';
import ServiceAttributeValueIndexId from '../../../pages/dashboard/services/services/service_attribute_value/ServiceAttributeValueIndexId';
import AttributesServiceCreate from '../../../pages/dashboard/services/services/AttributesServiceCreate';
import GalleriesServiceCreate from '../../../pages/dashboard/services/services/GalleriesServiceCreate';
import HelpFilesServiceCreate from '../../../pages/dashboard/services/services/HelpFilesServiceCreate';
import ServicePriceIndex from '../../../pages/dashboard/services/services/service_prices/ServicePriceIndex';
import ServicePriceCreate from '../../../pages/dashboard/services/services/service_prices/ServicePriceCreate';
import ServicePriceEdit from '../../../pages/dashboard/services/services/service_prices/ServicePriceEdit';

const Main = () => {
    const { isOpenSidebar } = useContext(IsOpenSideBar);

    return (
        <section className={isOpenSidebar ? 'flex flex-col gap-y-6 w-full md:w-4/5 lg:w-5/6 order-2 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[50px] main-cotainer py-2 px-4 lg:p-6' : 'flex flex-col gap-y-6 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[25px] myTransition py-2 px-4 lg:p-6 md:w-[95vw]'}>
            <Header />
            <Routes>
                <Route path='/dashboard/' element={<Home />} />
                {/* category routes start */}
                <Route path='/dashboard/service/category/' element={<CategoryIndex />} />
                <Route path='/dashboard/service/category/create' element={<CategoryCreate />} />
                <Route path='/dashboard/service/category/edit/:id' element={<CategoryEdit />} />
                {/* category routes end */}
                {/* services routes start */}
                <Route path='/dashboard/service/service' element={<ServiceIndex />} />
                <Route path='/dashboard/service/create' element={<ServiceCreate />} />
                <Route path='/dashboard/service/edit/:id' element={<ServiceEdit />} />
                <Route path='/dashboard/service/create-attributes/:id' element={<AttributesServiceCreate />} />
                <Route path='/dashboard/service/gallery/:id' element={<GalleriesServiceCreate />} />
                <Route path='/dashboard/service/help-files/:id' element={<HelpFilesServiceCreate />} />
                {/* services routes end */}
                {/* services attributes routes start */}
                <Route path='/dashboard/service/attributes' element={<ServiceAttributeIndex />} />
                <Route path='/dashboard/service/attributes/create' element={<ServiceAttributeCreate />} />
                <Route path='/dashboard/service/attributes/edit/:id' element={<ServiceAttributeEdit />} />
                {/* services attributes routes end */}
                {/* services prices routes start */}
                <Route path='/dashboard/service/prices/:id' element={<ServicePriceIndex />} />
                <Route path='/dashboard/service/prices/create/:id' element={<ServicePriceCreate />} />
                <Route path='/dashboard/service/prices/edit/:id' element={<ServicePriceEdit />} />
                {/* services prices routes end */}
                {/* services attributes values routes start */}
                <Route path='/dashboard/service/attributes/value/' element={<ServiceAttributeValueIndex />} />
                <Route path='/dashboard/service/attributes/value/attribute-name/:id' element={<ServiceAttributeValueIndexId />} />
                <Route path='/dashboard/service/attributes/value/create' element={<ServiceAttributeValueCreate />} />
                <Route path='/dashboard/service/attributes/value/edit/:id' element={<ServiceAttributeValueEdit />} />
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
                <Route path='/dashboard/content/post/show' element={<PostShow />} />
                {/* posts routes end */}
                {/* comments routes start */}
                <Route path='/dashboard/content/comment/' element={<CommentIndex />} />
                <Route path='/dashboard/content/comment/show' element={<CommnetShow />} />
                {/* comments routes end */}
                {/* faqs routes start */}
                <Route path='/dashboard/content/faqs/' element={<FaqIndex />} />
                <Route path='/dashboard/content/faqs/create' element={<FaqCreate />} />
                <Route path='/dashboard/content/faqs/edit' element={<FaqEdit />} />
                {/* faqs routes end */}
                {/* banners routes start */}
                <Route path='/dashboard/content/banners/' element={<BannerIndex />} />
                <Route path='/dashboard/content/banners/create' element={<BannerCreate />} />
                <Route path='/dashboard/content/banners/edit' element={<BannerEdit />} />
                {/* banners routes end */}
                {/* admin user routes start */}
                <Route path='/dashboard/users/admin/' element={<AdminIndex />} />
                <Route path='/dashboard/users/admin/create' element={<AdminCreate />} />
                <Route path='/dashboard/users/admin/edit' element={<AdminEdit />} />
                {/* admin user routes end */}
                {/* customer routes start */}
                <Route path='/dashboard/users/customer/' element={<CustomerIndex />} />
                <Route path='/dashboard/users/customer/create' element={<CustomerCreate />} />
                <Route path='/dashboard/users/customer/edit' element={<CustomerEdit />} />
                {/* customer routes end */}
                {/* category ticket routes start */}
                <Route path='/dashboard/tickets/category/' element={<CategoryTicketIndex />} />
                <Route path='/dashboard/tickets/category/create' element={<CategoryTicketCreate />} />
                <Route path='/dashboard/tickets/category/edit' element={<CategoryTicketEdit />} />
                {/* category ticket routes end */}
                {/* priority ticket routes start */}
                <Route path='/dashboard/tickets/priority/' element={<PriorityTicketIndex />} />
                <Route path='/dashboard/tickets/priority/create' element={<PriorityTicketCreate />} />
                <Route path='/dashboard/tickets/priority/edit' element={<PriorityTicketEdit />} />
                {/* priority ticket routes end */}
                {/* admin ticket routes start */}
                <Route path='/dashboard/tickets/admin/' element={<AdminTicketIndex />} />
                {/* admin ticket routes end */}
                {/* ticket routes start */}
                <Route path='/dashboard/tickets/' element={<TicketIndex />} />
                {/* ticket routes end */}
                {/* setting routes start */}
                <Route path='/dashboard/setting/' element={<SettingIndex />} />
                <Route path='/dashboard/setting/edit' element={<SettingEdit />} />
                {/* setting routes end */}
            </Routes>
        </section>
    );
};

export default Main;