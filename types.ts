
export enum UserRole {
  ADMIN = 'Admin',
  PHARMACIST = 'Pharmacist',
  CASHIER = 'Cashier',
}

export interface User {
  id: string;
  username: string;
  password?: string; 
  role: UserRole;
  name: string;
}

export interface Medicine {
  id: string;
  name: string;
  batchNumber: string;
  manufacturer: string;
  supplier?: string; 
  category?: string; 
  expiryDate: string; 
  manufacturingDate: string; 
  purchasePrice: number; 
  salePrice: number;   
  quantityInStock: number;
  lowStockThreshold?: number; 
}

export interface Customer {
  id: string;
  name: string;
  age?: number;
  gender?: 'Male' | 'Female' | 'Other';
  contact: string;
  address?: string;
}

export interface BillItem {
  medicineId: string;
  medicineName: string;
  quantity: number;
  unitPrice: number; 
  totalPrice: number;
}

export interface Bill {
  id: string;
  billNumber: string;
  customerId?: string;
  customerName?: string;
  items: BillItem[];
  totalAmount: number;
  discount: number; 
  taxAmount: number; 
  finalAmount: number;
  date: string; 
  paymentMethod: 'Cash' | 'Card' | 'UPI' | 'Other';
  billedByUserId: string;
  billedByUserName: string;
}

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

export enum ReorderStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled', 
}

export interface NewBatchInfo { 
  batchNumber: string;
  manufacturingDate: string;
  expiryDate: string;
  purchasePrice: number;
  salePrice: number;
}

export interface ReorderRequest {
  id: string;
  medicineId: string;
  medicineName: string;
  supplier?: string;
  quantityOrdered: number;
  requestedByUserId: string;
  requestedByUserName: string;
  requestDate: string; 
  status: ReorderStatus;
  adminNotes?: string; 
  completionDate?: string; 
  newBatchDetails?: NewBatchInfo; 
}

export interface NewBatchDetails extends NewBatchInfo {
  newQuantityInStock: number; 
}


export interface PurchaseRecord {
  id: string;
  medicineId: string;
  medicineName: string;
  supplier?: string;
  batchNumber: string;
  manufacturingDate: string;
  expiryDate: string;
  quantityPurchased: number;
  purchasePricePerUnit: number;
  salePricePerUnit: number; 
  totalPurchaseCost: number;
  purchaseDate: string; 
  relatedReorderId?: string;
  notes?: string; 
}

export interface EditReorderRequestPayload {
  requestId: string;
  updatedDetails: {
    quantityOrdered?: number;
    supplier?: string;
    newBatchDetails?: NewBatchInfo;
    adminNotes?: string;
  };
}

export type ReportType = 'sales' | 'inventory' | 'expiry' | 'lowStock';

export interface ArchivedReport {
  id: string;
  year: number;
  month: number; // 1-12
  reportType: ReportType;
  fileName: string;
  fullPath: string; // Absolute path
  generationDate: string; // ISO String
}

export type AppAction =
  | { type: 'INITIALIZE_STATE'; payload: Partial<AppState> }
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: string } 
  | { type: 'ADD_MEDICINE'; payload: Medicine }
  | { type: 'UPDATE_MEDICINE'; payload: Medicine }
  | { type: 'DELETE_MEDICINE'; payload: string } 
  | { type: 'ADD_CUSTOMER'; payload: Customer }
  | { type: 'UPDATE_CUSTOMER'; payload: Customer }
  | { type: 'DELETE_CUSTOMER'; payload: string } 
  | { type: 'ADD_BILL'; payload: Bill }
  | { type: 'UPDATE_MEDICINE_STOCK'; payload: { medicineId: string; quantityChange: number } } 
  | { type: 'ADD_REORDER_REQUEST'; payload: ReorderRequest }
  | { type: 'UPDATE_REORDER_STATUS'; payload: { requestId: string; status: ReorderStatus; adminNotes?: string } }
  | { type: 'EDIT_REORDER_REQUEST'; payload: EditReorderRequestPayload } 
  | { type: 'DISPOSE_EXPIRED_STOCK'; payload: { medicineId: string } }
  | { type: 'REPLACE_EXPIRED_BATCH'; payload: { medicineId: string; details: NewBatchDetails } }
  | { type: 'ADD_PURCHASE_RECORD'; payload: PurchaseRecord }
  | { type: 'ADD_ARCHIVED_REPORT'; payload: ArchivedReport }; // New Action
  
export interface AppState { 
  currentUser: User | null;
  users: User[];
  medicines: Medicine[];
  customers: Customer[];
  bills: Bill[];
  reorderRequests: ReorderRequest[];
  purchaseRecords: PurchaseRecord[]; 
  archivedReports: ArchivedReport[]; // New State
  lowStockThreshold: number;
}
