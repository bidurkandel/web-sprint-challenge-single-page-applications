import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 chars long"),
    size: yup
    .string()
    .oneOf(["10'","12'","14'","18'"], "select size"),
    mushrooms: yup.boolean(),
    blackOlives: yup.boolean(),
    pepperoni: yup.boolean(),
    extraCheese: yup.boolean(),
    specialInst: yup.string()
});
