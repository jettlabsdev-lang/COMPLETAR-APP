import { Injectable } from '@nestjs/common';

export interface HealthStatus {
  status: 'ok';
  service: string;
  environment: string;
  uptime: number;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHealth(): HealthStatus {
    return {
      status: 'ok',
      service: 'completar-api',
      environment: process.env.NODE_ENV ?? 'development',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}