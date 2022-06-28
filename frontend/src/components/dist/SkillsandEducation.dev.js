// import React from 'react'
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import { Button, Form, Input, Space } from 'antd';
// function SkillsandEducation() {
//     return <div>
//         <h4><b>Education</b></h4>
//         <hr />
//         <Form.List name="Education">
//             {(fields, { add, remove }) => (
//                 <>
//                   <div className='row'>
//                   {fields.map(({ key, name, ...restField }) => (
//                         <>
//                             <div className='col-md-3'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'qualification']}
//                                 rules={[{ required: true, message: 'Missing qualification' }]}
//                             >
//                                 <Input placeholder="Qualification" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-2'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'percentage']}
//                                 rules={[{ required: true, message: 'Missing percentage' }]}
//                             >
//                                 <Input placeholder="Percentage/CGPA" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-3'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'Institution/College']}
//                                 rules={[{ required: true, message: 'Missing Institution' }]}
//                             >
//                                 <Input placeholder="Institution/College" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-2'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'session']}
//                                 rules={[{ required: true, message: 'Missing session details' }]}
//                             >
//                                 <Input placeholder="Year of Passing" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-2'>
//                             <MinusCircleOutlined style={{fontSize:25,color:'tomato'}}onClick={() => remove(name)} />
//                             </div>
//                         </>
//                     ))}
//                     <Form.Item>
//                         <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
//                             Add Education
//                         </Button>
//                     </Form.Item>
//                   </div>
//                 </>
//             )}
//         </Form.List>
//         <h4><b>Skills</b></h4>
//         <hr />
//         <Form.List name="Skills">
//             {(fields, { add, remove }) => (
//                 <>
//                   <div className='row'>
//                   {fields.map(({ key, name, ...restField }) => (
//                         <>
//                             <div className='col-md-4'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'technical']}
//                                 rules={[{ required: true, message: 'Missing technical skills' }]}
//                             >
//                                 <Input placeholder="Techincal Competencies" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-4'>
//                             <Form.Item
//                                 {...restField}
//                                 name={[name, 'rating']}
//                                 rules={[{ required: true, message: 'Missing rating' }]}
//                             >
//                                 <Input placeholder="Rate yourself out of 10" />
//                             </Form.Item>
//                             </div>
//                             <div className='col-md-2'>
//                             <MinusCircleOutlined style={{fontSize:25,color:'tomato'}}onClick={() => remove(name)} />
//                             </div>
//                         </>
//                     ))}
//                     <Form.Item>
//                         <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
//                             Add Skills
//                         </Button>
//                     </Form.Item>
//                   </div>
//                 </>
//             )}
//         </Form.List>
//     </div>
// }
// export default SkillsandEducation;
"use strict";
//# sourceMappingURL=SkillsandEducation.dev.js.map
