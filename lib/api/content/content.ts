import { SERVER_ERROR_MESSAGE } from '@/constants';

import { getApi, postApi } from '..';
import { IPaginationResponse } from '../common.types';
import { responseSuccess } from '../response';
import { IContent, IContentDetail, IContentGetParameter } from './content.types';

export const APIGetContentList = async (
  params: IContentGetParameter
): Promise<IPaginationResponse<IContent[]>> => {
  try {
    const res = await postApi('/api/content/list', {
      ...params,
      size: 10
    });

    if (responseSuccess(res)) {
      return res.data;
    }

    throw Error(res.message);
  } catch (error) {
    throw Error(SERVER_ERROR_MESSAGE);
  }
};

export const APIGetContent = async (id: number): Promise<IContentDetail> => {
  try {
    const res = await getApi(`/api/content?id=${id}`);

    if (responseSuccess(res)) {
      return res.data;
    }

    throw Error(res.message);
  } catch (error) {
    throw Error(SERVER_ERROR_MESSAGE);
  }
};
