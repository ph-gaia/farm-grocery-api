import { Router } from 'express';

import AddressController from '../controllers/Address';

const router = Router();

router.post('/', AddressController.create);
router.get('/', AddressController.read);
router.get('/:id', AddressController.readOne);
router.put('/:id', AddressController.update);
router.delete('/:id', AddressController.delete);

export default router;