import JsonLd from './JsonLd';
import { organizationSchema } from '../lib/schema';

export default function OrgSchema() {
  return <JsonLd data={organizationSchema()} />;
}
