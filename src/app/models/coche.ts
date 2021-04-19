export class Coche {
  id: number;
  make: string;
  color: string;
  model: string;
  state: string;
  doors: number;
  type: string;
  engineHp: number;
  discount: boolean;
  visible: boolean;
  available: boolean;
  price: number;
  rating: number;
  foto: string;



  constructor(item?: any) {
      this.id = item?.id || 0;
      this.make = item?.make || '';
      this.color = item?.color || '';
      this.model = item?.model || '';
      this.state = item?.state || '';
      this.doors = item?.doors || 0;
      this.type = item?.type || '' ;
      this.engineHp = item?.c || 0;
      this.discount = item?.discount || false;
      this.visible = item?.visible || false;
      this.available = item?.available || false;
      this.price = item?.price || 0;
      this.rating = item?.rating || 0;
      this.foto = item?.foto || '';
  }
}
