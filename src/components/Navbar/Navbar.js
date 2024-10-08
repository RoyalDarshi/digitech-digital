import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/digitech.jpeg';
import './Navbar.css';


const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isLuckOpen, setIsLuckOpen] = useState(false);
    const openLuck=(state)=>{
        if(state.label==='Lucknow ▼'||state.label==='Bangalore ▼'){
            setIsLuckOpen(true)
        }else{
            setIsLuckOpen(false)
        }
    }

    return (
        <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="nav-link" aria-haspopup="true" aria-expanded={isOpen}>
                {title}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <div key={index} className="dropdown-item-wrapper">
                            <Link to={item.path} className="dropdown-item">{item.label}</Link>
                            {item.subItems && item.subItems.length > 0 && (
                                <div className="inner-dropdown">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <div onMouseEnter={() => openLuck(subItem)}
                                             onMouseLeave={() => setIsLuckOpen(false)} className="dropdown-item-wrapper" key={subIndex}>
                                            <Link to={subItem.path} className="inner-dropdown-item">{subItem.label}</Link>
                                            {subItem.subItems && subItem.subItems.length > 0 && isLuckOpen&&(
                                                <div className="inner-dropdown">
                                                    {subItem.subItems.map((innerItem, innerIndex) => (
                                                        <Link key={innerIndex} to={innerItem.path} className="inner-dropdown-item">{innerItem.label}</Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};



const Navbar = () => {
    const location = useLocation();

    const aboutItems = [
        { path: '/who-we-are', label: 'Who We Are' },
        { path: '/podcast', label: 'Podcast' },
        { path: '/videos', label: 'Videos' },
        { path: '/trainee-reviews', label: 'Trainee Reviews' },
        { path: '/placements', label: 'Placements' },
        { path: '/media-coverage', label: 'Media Coverage' },
        { path: '/batch-images', label: 'Batch Images' },
        { path: '/careers', label: 'Careers' },
    ];

    const programsItems = [
        {
            label: 'Digital Marketing ▼',
            path: '/courses/digital-marketing',
            subItems: [
                { path: '/courses/digital-marketing/advanced', label: 'Foundation Course (2 Month)' },
                { path: '/courses/digital-marketing/advanced', label: 'Specialist Course (3 Months+)' },
                { path: '/courses/digital-marketing/advanced', label: 'Master Course (4.5 Months+)' },
                { path: '/courses/digital-marketing/advanced', label: 'Professional Course (6 Months)' },
                { path: '/courses/digital-marketing/advanced', label: 'Digi Hero (1 Year)' },
                { path: '/courses/digital-marketing/advanced', label: 'Digital Ninja (Kids)' },
            ],
        },
        {
            label: 'Data Science ▼',
            path: '/courses/data-science',
            subItems: [
                { path: '/courses/data-science/machine-learning', label: 'Master Program in Data Science' },
            ],
        },
    ];

    const blogItems = [
        { path: '/blog/seo', label: 'Read Blogs' },
        { path: '/blog/smm', label: 'Submit Guest Post' },
    ];

    const centerItems = [
        {
            path: '/centers/delhi-ncr',
            label: 'Delhi/NCR ▼',
            subItems: [
                { path: '/centers/delhi-ncr/shivalik', label: 'Shivalik' },
                { path: '/centers/delhi-ncr/pitampura', label: 'Pitampura' },
                { path: '/centers/delhi-ncr/dwarka', label: 'Dwarka' },
                { path: '/centers/delhi-ncr/noida', label: 'Noida' },
                { path: '/centers/delhi-ncr/gurgaon', label: 'Gurgaon' },
                { path: '/centers/delhi-ncr/connaught-place', label: 'Connaught Place' },
                { path: '/centers/delhi-ncr/rajouri-garden', label: 'Rajouri Garden' },
                { path: '/centers/delhi-ncr/preet-vihar', label: 'Preet Vihar' },
            ]
        },
        {
            path: '/centers/uttar-pradesh',
            label: 'Uttar Pradesh ▼',
            subItems: [
                {
                    path: '/centers/lucknow',
                    label: 'Lucknow ▼',
                    subItems: [
                        { path: '/centers/lucknow/pitampura', label: 'Gomati Nager' },
                        { path: '/centers/lucknow/another-subitem', label: 'Hazratganj' },
                        { path: '/centers/lucknow/another-subitem', label: 'Aliganj' },// Add more as needed
                    ]
                },
                { path: '/centers/lucknow/another-subitem', label: 'Agra' },
                { path: '/centers/lucknow/another-subitem', label: 'Prayagraj coming soon' },
                { path: '/centers/lucknow/another-subitem', label: 'Sultanpur' },
                { path: '/centers/lucknow/another-subitem', label: 'Varanasi' },
                { path: '/centers/lucknow/another-subitem', label: 'Gorakhpur' },
                { path: '/centers/lucknow/another-subitem', label: 'Ghaziabad' },
            ]
        },
        { path: '/centers/lucknow/another-subitem', label: 'Assam ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Guwahati' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Punjab ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Bathinda' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Karnataka ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Bangalore ▼',subItems: [
                        { path: '/centers/lucknow/another-subitem', label: 'Indira Nagar' },
                        { path: '/centers/lucknow/another-subitem', label: 'Yelahanka' },
                    ] },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Rajasthan ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Jaipur' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Haryana ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Sirsa' },
                { path: '/centers/lucknow/another-subitem', label: 'Kernal Coming soon' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Maharashtra ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Mumbai Vashi' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Gujrat ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Vadodra' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Madhya Pradesh ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Indore' },
                { path: '/centers/lucknow/another-subitem', label: 'Bhopal' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Uttrakhand ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Dehradun' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Jharkhand ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Ranchi' },
            ] },
        { path: '/centers/lucknow/another-subitem', label: 'Chhatisgarh ▼',subItems: [
                { path: '/centers/lucknow/another-subitem', label: 'Raipur' },
                { path: '/centers/lucknow/another-subitem', label: 'Korba Coming soon' },
            ] },
    ];

    const contactItems = [
        { path: '/contact/faq', label: 'Contact Us' },
        { path: '/contact/support', label: 'Franchise' },
        { path: '/contact/feedback', label: 'Pay Course Fee' },
        { path: '/contact/faq', label: 'Terms and Conditions' },
        { path: '/contact/faq', label: 'Privacy Policy' },
        { path: '/contact/faq', label: 'Refund and Cancellation Policy' },
    ];

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Digitech Digital" className="navbar-logo-image" />
            </div>
            <nav className="navbar-links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </Link>
                <Dropdown title="About Us" items={aboutItems} />
                <Dropdown title="Our Programs" items={programsItems} />
                <Dropdown title="Blog" items={blogItems} />
                <Dropdown title="Centers" items={centerItems} />
                <Dropdown title="Contact Us" items={contactItems} />
                <input type="text" placeholder="Search courses" className="search-box" />
                <Link to="/payfee" className="pay-button">Pay Course Fee</Link>
            </nav>
        </header>
    );
};

export default Navbar;
