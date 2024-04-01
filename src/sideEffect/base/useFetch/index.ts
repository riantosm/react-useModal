import { onHideModal, onShowModal } from "@/redux";
import { useAppDispatch } from "@/redux/hooks";
import { IFetchForm, ILoginForm, IModal, IResultAction } from "@/types";

interface useFetchProps {}

const useFetch = (props?: useFetchProps) => {
  const dispatch = useAppDispatch();

  const handleFetch = async (
    form: IFetchForm<ILoginForm>
  ): Promise<IResultAction<any>> => {
    const { body } = form;

    var urlencoded = new URLSearchParams();
    for (const [key, value] of Object.entries(body)) {
      console.log(`Key: ${key}, Value: ${value}`);
      urlencoded.append(key, value);
    }
    // urlencoded.append("j_username", form.j_username);
    // urlencoded.append("j_password", form.j_password);

    var requestOptions: RequestInit = {
      method: "POST",
      body: urlencoded,
      redirect: "follow",
      credentials: "include",
    };

    var result: IResultAction<any> = await fetch(
      "https://8et.alan.bet/j_spring_security_check",
      requestOptions
    ).then((response) => response.json());

    return result;
  };

  return { handleFetch };
};

export default useFetch;
