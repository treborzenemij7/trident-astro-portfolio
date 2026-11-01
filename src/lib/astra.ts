import { DataAPIClient } from "@datastax/astra-db-ts";

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  created_at?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  link?: string;
  featured: boolean;
}

class AstraDBClient {
  private client: DataAPIClient;
  private db: any;
  private collection: any;

  constructor() {
    const token = import.meta.env.ASTRA_DB_APPLICATION_TOKEN || process.env.ASTRA_DB_APPLICATION_TOKEN || '';
    const endpoint = import.meta.env.ASTRA_DB_REST_URL || process.env.ASTRA_DB_REST_URL || '';

    if (!token || !endpoint) {
      // Skip validation for build/preview
      if (import.meta.env.DEV) {
        throw new Error('Las variables de entorno ASTRA_DB_APPLICATION_TOKEN y ASTRA_DB_REST_URL son requeridas para el acceso a la base de datos');
      }
      // Mock client for static builds
      this.client = null as any;
      this.db = null as any;
      this.collection = null as any;
      return;
    }

    this.client = new DataAPIClient(token);
    this.db = this.client.db(endpoint);
    this.collection = this.db.collection('contacts');
  }

  async insertContact(data: ContactForm): Promise<boolean> {
    try {
      if (!this.client) {
        console.warn('Astra DB no configurado - simulando inserción');
        return true;
      }
      const doc = {
        ...data,
        created_at: new Date().toISOString(),
        _id: data.email + '-' + Date.now(),
      };
      await this.collection.insertOne(doc);
      return true;
    } catch (error) {
      console.error('Error al guardar contacto en Astra DB:', error);
      return false;
    }
  }

  async getPortfolio(): Promise<PortfolioItem[]> {
    return [
      {
        id: '1',
        title: 'Plataforma de Automatización Financiera',
        description: 'Sistema completo de automatización para análisis y reporting financiero.',
        category: 'Automatización',
        tags: ['Python', 'Node.js', 'Astra DB'],
        featured: true,
      },
      {
        id: '2',
        title: 'E-commerce B2B',
        description: 'Desarrollo de plataforma e-commerce con integración de pagos y CRM.',
        category: 'Desarrollo Software',
        tags: ['React', 'Next.js', 'PostgreSQL'],
        featured: true,
      },
    ];
  }
}

export const astraDB = new AstraDBClient();
