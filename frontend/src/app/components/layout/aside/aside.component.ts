import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    standalone: true,
    imports: [PanelMenuModule]
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = []; 

    ngOnInit() {
        this.items = [
            {
                label: 'Clientes',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Ver Clientes',
                        icon: 'pi pi-eye',
                        routerLink: '/clientes'
                    },
                    {
                        label: 'Agregar Cliente',
                        icon: 'pi pi-user-plus',
                        routerLink: '/clientes/nuevo'
                    },
                    {
                        label: 'Editar Cliente',
                        icon: 'pi pi-user-edit',
                        routerLink: '/clientes/edit/:id'
                    },
                    {
                        label: 'Eliminar Cliente',
                        icon: 'pi pi-user-minus',
                        routerLink: '/clientes/eliminar/:id'
                    }
                ]
            },
            {
                label: 'Empleados',
                icon: 'pi pi-id-card',
                items: [
                    {
                        label: 'Ver Empleados',
                        icon: 'pi pi-eye',
                        routerLink: '/empleados'
                    },
                    {
                        label: 'Agregar Empleado',
                        icon: 'pi pi-user-plus',
                        routerLink: '/empleados/nuevo'
                    },
                    {
                        label: 'Editar Empleado',
                        icon: 'pi pi-user-edit',
                        routerLink: '/empleados/edit/:id'
                    },
                    {
                        label: 'Eliminar Empleado',
                        icon: 'pi pi-user-minus',
                        routerLink: '/empleados/eliminar/:id'
                    }
                ]
            },
            {
                label: 'Transacciones',
                icon: 'pi pi-wallet',
                items: [
                    {
                        label: 'Pagos',
                        icon: 'pi pi-money-bill',
                        items: [
                            {
                                label: 'Ver Pagos',
                                icon: 'pi pi-eye',
                                routerLink: '/pagos'
                            },
                            {
                                label: 'Registrar Pago',
                                icon: 'pi pi-plus',
                                routerLink: '/pagos/nuevo'
                            }
                        ]
                    },
                    {
                        label: 'Préstamos',
                        icon: 'pi pi-briefcase',
                        items: [
                            {
                                label: 'Ver Préstamos',
                                icon: 'pi pi-eye',
                                routerLink: '/prestamos'
                            },
                            {
                                label: 'Solicitar Préstamo',
                                icon: 'pi pi-plus',
                                routerLink: '/prestamos/nuevo'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Configuración de Préstamos',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Tipos de Préstamo',
                        icon: 'pi pi-tags',
                        items: [
                            {
                                label: 'Ver Tipos',
                                icon: 'pi pi-eye',
                                routerLink: '/tipoprestamo'
                            },
                            {
                                label: 'Agregar Tipo',
                                icon: 'pi pi-plus',
                                routerLink: '/tipoprestamo/nuevo'
                            }
                        ]
                    },
                    {
                        label: 'Solicitudes de Préstamo',
                        icon: 'pi pi-file',
                        items: [
                            {
                                label: 'Ver Solicitudes',
                                icon: 'pi pi-eye',
                                routerLink: '/solicitudprestamo'
                            },
                            {
                                label: 'Nueva Solicitud',
                                icon: 'pi pi-plus',
                                routerLink: '/solicitudprestamo/nuevo'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Administración',
                icon: 'pi pi-building',
                items: [
                    {
                        label: 'Sucursales',
                        icon: 'pi pi-sitemap',
                        items: [
                            {
                                label: 'Ver Sucursales',
                                icon: 'pi pi-eye',
                                routerLink: '/sucursales'
                            },
                            {
                                label: 'Agregar Sucursal',
                                icon: 'pi pi-plus',
                                routerLink: '/sucursales/nuevo'
                            }
                        ]
                    },
                    {
                        label: 'Garantías',
                        icon: 'pi pi-shield',
                        items: [
                            {
                                label: 'Ver Garantías',
                                icon: 'pi pi-eye',
                                routerLink: '/garantias'
                            },
                            {
                                label: 'Agregar Garantía',
                                icon: 'pi pi-plus',
                                routerLink: '/garantias/nuevo'
                            }
                        ]
                    },
                    {
                        label: 'Personas',
                        icon: 'pi pi-user',
                        items: [
                            {
                                label: 'Ver Personas',
                                icon: 'pi pi-eye',
                                routerLink: '/personas'
                            },
                            {
                                label: 'Agregar Persona',
                                icon: 'pi pi-user-plus',
                                routerLink: '/personas/nuevo'
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
