import {
  TIME_SWAP_VALID_DEFAULT,
  swapNotificationStatuses as notificationStatuses
} from '../../partnersConfig/config';

const changellyMethods = {
  ETH: {
    currencies: 'getCurrencies',
    currenciesFull: 'getCurrenciesFull',
    rate: 'getExchangeAmount',
    min: 'getMinAmount',
    validate: 'validateAddress',
    createTransaction: 'createTransaction',
    status: 'getStatus'
  }
};

const statuses = {
  new: 'new',
  waiting: 'waiting',
  confirming: 'confirming',
  exchanging: 'exchanging',
  sending: 'sending',
  finished: 'finished',
  failed: 'failed',
  refunded: 'refunded',
  overdue: 'overdue',
  hold: 'hold'
};

const TIME_SWAP_VALID = TIME_SWAP_VALID_DEFAULT;
const PROVIDER_NAME = 'changelly';
const FEE_RATE = 0.005;

const requireExtraId = ['XRP', 'STEEM', 'SBD', 'XLM', 'DCT', 'XEM'];

export {
  notificationStatuses,
  changellyMethods,
  statuses,
  requireExtraId,
  TIME_SWAP_VALID,
  PROVIDER_NAME,
  FEE_RATE
};
