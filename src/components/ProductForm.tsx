import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ImageUpload from './ImageUpload';

const ProductFormSchema = Yup.object().shape({
  productName: Yup.string().required('Product name is required'),
  description: Yup.string(),
  sku: Yup.string().required('SKU is required'),
  stock: Yup.number().required('Stock is required').min(0),
  category: Yup.string().required('Category is required'),
  price: Yup.number().required('Price is required').min(0),
});

const categories = ['Wash and Fold', 'Dry Clean', 'Home', 'Others'];

const ProductForm = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 w-full p-4 lg:p-6">
          <h1 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-6">
            Add New Product
          </h1>
          <Formik
            initialValues={{
              productName: '',
              description: '',
              sku: '',
              stock: 0,
              category: '',
              price: 0,
            }}
            validationSchema={ProductFormSchema}
            onSubmit={(values) => {
              console.log('Form Values:', values);
            }}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-sm text-blue font-medium">
                    Product Name
                  </label>
                  <Field
                    name="productName"
                    className="w-full mt-1 p-2 border border-blue rounded"
                  />
                  {touched.productName && errors.productName && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.productName}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-blue font-medium">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="w-full mt-1 p-2 border border-blue rounded"
                    rows="4"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-1/2">
                    <label className="block text-sm text-blue font-medium">
                      SKU
                    </label>
                    <Field
                      name="sku"
                      className="w-full mt-1 p-2 border border-blue rounded"
                    />
                    {touched.sku && errors.sku && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.sku}
                      </div>
                    )}
                  </div>
                  <div className="sm:w-1/2">
                    <label className="block text-sm text-blue font-medium">
                      Stock
                    </label>
                    <Field
                      name="stock"
                      type="number"
                      className="w-full mt-1 p-2 border border-blue rounded"
                    />
                    {touched.stock && errors.stock && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.stock}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        className={`px-3 py-1 border rounded ${
                          values.category === cat
                            ? 'bg-blue text-white'
                            : 'bg-skyBlue text-blue hover:bg-blue-200'
                        }`}
                        onClick={() => setFieldValue('category', cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  {touched.category && errors.category && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="sm:w-1/2">
                    <label className="block text-sm text-blue font-medium">
                      Price
                    </label>
                    <Field
                      name="price"
                      type="number"
                      className="w-full mt-1 p-2 border border-blue rounded"
                    />
                    {touched.price && errors.price && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.price}
                      </div>
                    )}
                  </div>

                  <div className="sm:w-1/3 mt-4">
                    <button
                      type="submit"
                      className="w-full bg-mintGreen text-white py-2 rounded"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="lg:w-1/3 w-full bg-white p-4 lg:p-6 rounded shadow text-center">
          <ImageUpload />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
