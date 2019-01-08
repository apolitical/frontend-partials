// @flow
import fetch from 'isomorphic-fetch';

const corsSettings = {
  credentials: 'same-origin',
};

const memberApiOptions = {
  ...corsSettings,
  headers: {
    Accept: 'application/vnd.apolitical.members.v2+json',
  },
};

// Required wherever we need the full response payload
export const getMemberRaw = (slug: string) => (
  fetch(`/api/members/member/${slug}`, memberApiOptions)
);

// Just returns the Member object
export const getMember = async (slug: string) => (
  (await getMemberRaw(slug)).json()
);
