import PageWrapper from './PageWrapper';

const PageAccount = () => {
  return (
    <PageWrapper>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center bg-white border rounded-md py-10 px-4 w-1/2">
          <h2 className="text-center mb-8">Mon compte</h2>
          <div>
            <button className="py-2 px-4 my-1 mx-2 border rounded-md bg-blue-700 text-white hover:bg-blue-600">
              Se connecter
            </button>
          </div>
          <div>
            <button className="py-2 px-4 my-1 mx-2 border rounded-md bg-blue-700 text-white hover:bg-blue-600">
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PageAccount;
