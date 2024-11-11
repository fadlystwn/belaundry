import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
    <div className="flex gap-8">
      <div className="w-2/3 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
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
          {({ errors, touched, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Product Name
                </label>
                <Field
                  name="productName"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
                {touched.productName && errors.productName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.productName}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium">SKU</label>
                  <Field
                    name="sku"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                  {touched.sku && errors.sku && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.sku}
                    </div>
                  )}
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium">Stock</label>
                  <Field
                    name="stock"
                    type="number"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
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
                <div className="flex gap-2">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      className="px-3 py-1 border rounded bg-blue-100 hover:bg-blue-200"
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

              <div>
                <label className="block text-sm font-medium">Price</label>
                <Field
                  name="price"
                  type="number"
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
                {touched.price && errors.price && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.price}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded mt-4"
              >
                Publish
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="w-1/3 bg-white p-6 rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        <div className="border border-dashed border-gray-300 rounded-lg p-6">
          <label className="cursor-pointer inline-block px-4 py-2 bg-blue-500 text-white rounded">
            Upload image here
            <input type="file" hidden />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
