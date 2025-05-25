
import React from 'react';
import { UserRole } from './types';

export const APP_NAME = "Shiv-Manish";

export const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: <HomeIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST, UserRole.CASHIER] },
  { name: 'Medicines', path: '/medicines', icon: <PillIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST] },
  { name: 'Customers', path: '/customers', icon: <UsersIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST, UserRole.CASHIER] },
  { name: 'Billing', path: '/billing', icon: <ShoppingCartIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST, UserRole.CASHIER] },
  { name: 'Sales Report', path: '/reports/sales', icon: <ChartBarIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST] }, // New
  { name: 'Purchase Report', path: '/reports/purchases', icon: <ShoppingBagIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST] }, // New
  { name: 'P&L Report', path: '/reports/profit-loss', icon: <CurrencyDollarIcon className="w-5 h-5" />, roles: [UserRole.ADMIN] }, // New
  { name: 'Report Archives', path: '/reports/archive', icon: <ArchiveBoxIcon className="w-5 h-5" />, roles: [UserRole.ADMIN, UserRole.PHARMACIST] }, // Renamed
  { name: 'Re-order Mgmt', path: '/reorders', icon: <ClipboardListIcon className="w-5 h-5" />, roles: [UserRole.ADMIN] },
  { name: 'Users', path: '/users', icon: <UserGroupIcon className="w-5 h-5" />, roles: [UserRole.ADMIN] },
];

export const LOW_STOCK_THRESHOLD = 10;
export const EXPIRY_WARNING_DAYS = 30; // Warn if expiring within 30 days

// SVG Icons (Heroicons)

export function HomeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M2.25 12v9A2.25 2.25 0 004.5 23.25h15A2.25 2.25 0 0021.75 21V12m-9.046-4.79L12 6.164l.796 1.046M15.75 12v5.25h-3V12h3z" />
    </svg>
  );
}

export function PillIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return ( // Updated PillIcon to a capsule shape
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.38 10.148a6.717 6.717 0 000 3.704m5.487-5.487a6.717 6.717 0 00-3.704 0m3.704 0L12 8.25l-1.833.11m3.666 0L12 12.375l-1.833-.11m3.666 0a6.712 6.712 0 013.704 0m-3.704 0L12 15.75l-1.833.11m3.666 0L12 19.875l-1.833-.11M17.62 10.148a6.717 6.717 0 010 3.704m-5.487-5.487a6.717 6.717 0 013.704 0m-3.704 0L12 8.25l1.833.11m-3.666 0L12 12.375l1.833-.11m-3.666 0a6.712 6.712 0 00-3.704 0m3.704 0L12 15.75l1.833.11m-3.666 0L12 19.875l1.833-.11M13.852 6.38a6.717 6.717 0 00-3.704 0m5.487 5.487a6.717 6.717 0 000-3.704m-5.487 3.704a6.717 6.717 0 000-3.704m0 3.704L8.25 12l.11 1.833m0-3.666L12.375 12l-.11 1.833m0-3.666a6.712 6.712 0 010-3.704m0 3.704L15.75 12l.11 1.833m0-3.666L19.875 12l-.11 1.833m-3.704-5.487a6.717 6.717 0 013.704 0m-3.704-3.704L12 6.38l1.833-.11M8.25 12l-.11-1.833M12.375 12l.11-1.833m0 3.666L8.25 12m3.666 0L12.375 12M15.75 12l.11-1.833M19.875 12l-.11-1.833M10.148 17.62a6.717 6.717 0 010-3.704m3.704 5.487a6.712 6.712 0 01-3.704 0m3.704-5.487L12 13.852l-1.833-.11m3.666 0L12 10.148l-1.833.11m0 0A6.717 6.717 0 016.38 13.852a6.717 6.717 0 010-3.704m0 0A6.717 6.717 0 0110.148 6.38a6.717 6.717 0 013.704 0m0 0A6.717 6.717 0 0117.62 10.148a6.717 6.717 0 010 3.704m0 0A6.717 6.717 0 0113.852 17.62a6.717 6.717 0 01-3.704 0z" />
    </svg>
  );
}

export function UsersIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

export function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}

export function ChartBarIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

export function UserGroupIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return ( // Updated UserGroupIcon
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.018M15 18.72V16.5a3 3 0 00-3-3H6.75a3 3 0 00-3 3v2.22c0 .651.187 1.274.526 1.821M12.75 6A3.75 3.75 0 115.25 6 3.75 3.75 0 0112.75 6zM15 18.72a9.094 9.094 0 01-3.741.479m3.741-.479c-.374.199-.78.362-1.206.479M15 18.72c.374.199.78.362 1.206.479m-1.206-.479C13.626 18.41 12.845 18 12 18c-.845 0-1.626.41-2.274.953m4.548-.953a3.75 3.75 0 10-4.548 0M12 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    </svg>
  );
}

export function PlusCircleIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function PencilIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  );
}

export function TrashIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.046 3.32.134m7.364-1.275c-.44-.462-1.051-.863-1.746-1.226" />
    </svg>
  );
}

export function ExclamationTriangleIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

export function EyeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function LogoutIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  );
}

export function PrinterIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a2.25 2.25 0 012.25-2.25H15M10.5 21V15.75M10.5 21H12m0 0h.375m0 0A2.25 2.25 0 0014.625 18.75H15M10.5 21H9.375A2.25 2.25 0 017.125 18.75H7.5M15 21H13.5m0 0V15.75m0 0A2.25 2.25 0 0011.25 13.5H6.72M15 21H16.875A2.25 2.25 0 0019.125 18.75h-1.05M19.125 18.75h.625A2.25 2.25 0 0022 16.125V13.5A2.25 2.25 0 0019.75 11.25h-1.5A2.25 2.25 0 0016 13.5v2.625c0 .621.504 1.125 1.125 1.125H19.125zM16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H8.625c-.621 0-1.125.504-1.125 1.125V7.5m0 0h7.875m-7.875 0A2.25 2.25 0 004.5 9.75v5.625c0 .621.504 1.125 1.125 1.125h2.076" />
    </svg>
  );
}

export function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

export function SendIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

export function CurrencyDollarIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}

export function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function FilterIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  );
}

export function ArchiveBoxIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 10.5h7.5M8.25 14.25h7.5" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.625a2.25 2.25 0 01-2.247 2.125H6.622a2.25 2.25 0 01-2.247-2.125L3.75 7.5m16.5 0V5.625A2.625 2.625 0 0017.625 3H6.375A2.625 2.625 0 003.75 5.625v1.875m16.5 0c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 7.5m16.5 0V5.625" />
    </svg>
  );
}
export const ArchiveBoxArrowDownIcon = ArchiveBoxIcon;


export function ReplaceIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

export function TableCellsIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

export function DownloadIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

export function ArrowTopRightOnSquareIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}
export const ExternalLinkIcon = ArrowTopRightOnSquareIcon; 

export function XCircleIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element { 
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function DocumentTextIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

export function FolderOpenIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V8.25q0-.922.66-1.59L12 4.5M12 4.5l2.34 2.16a.75.75 0 00.66.09q.48-.24.9-.66l2.85-4.275a.75.75 0 00-.33-1.018l-8.25-4.125a.75.75 0 00-.832 0L3.32 1.662a.75.75 0 00-.33 1.018l2.85 4.275q.42.42.9.66a.75.75 0 00.66-.09L9 6.75V8.25m3-3.75V4.5" />
    </svg>
  );
}
