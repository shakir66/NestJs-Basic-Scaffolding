import { SetMetadata } from '@nestjs/common';

import { RoleType } from '../common/enums/role-type';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Roles = (...roles: RoleType[]) => SetMetadata('roles', roles);
