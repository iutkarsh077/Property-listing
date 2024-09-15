import AmenityCard from "../AmenityCard";
import Gaurd from "../../assets/guard.png";
import Electricity from "../../assets/eco-house.png";
import Forest from "../../assets/forest.png";
import SwimmingPool from "../../assets/swimming-pool.png";
import People from "../../assets/ancestors.png";
const Amenities = () => {
  return (
    <div className="my-8 gap-8 mx-4 grid grid-cols-4">
      <AmenityCard
        imageUrl={Gaurd}
        title="24x7 security provided"
        name="Security"
        number={"01"}
      />
      <AmenityCard
        imageUrl={Electricity}
        title="No power cuts"
        name="Electricity"
        number={"02"}
      />
      <AmenityCard
        imageUrl={Forest}
        title="Area is clean and between nature"
        name="Nice view"
        number={"03"}
      />
      <AmenityCard
        imageUrl={SwimmingPool}
        title="Swimming pool is available"
        name="Swimming pool"
        number={"04"}
      />
      <AmenityCard
        imageUrl={People}
        title="Nice neighbourhood and friendly people"
        name="Nice neighbourhood"
        number={"05"}
      />
      <AmenityCard
        imageUrl={Electricity}
        title="No power cuts"
        name="Electricity"
        number={"06"}
      />
      <AmenityCard
        imageUrl={Forest}
        title="Area is clean and between nature"
        name="Nice view"
        number={"07"}
      />
      <AmenityCard
        imageUrl={SwimmingPool}
        title="Swimming pool is available"
        name="Swimming pool"
        number={"08"}
      />
      <AmenityCard
        imageUrl={Gaurd}
        title="24x7 security provided"
        name="Security"
        number={"09"}
      />
      <AmenityCard
        imageUrl={Electricity}
        title="No power cuts"
        name="Electricity"
        number={"10"}
      />
      <AmenityCard
        imageUrl={Forest}
        title="Area is clean and between nature"
        name="Nice view"
        number={"11"}
      />
      <AmenityCard
        imageUrl={SwimmingPool}
        title="Swimming pool is available"
        name="Swimming pool"
        number={"12"}
      />
    </div>
  );
};

export default Amenities;
