/**
 * 账户确认明细信息
 */
import React from 'react';
import { connect } from 'dva';
import { table_serch } from '../../../utils/hocUtil';
import { Card } from 'antd';
import StandardTable from '../../../components/StandardTable';
import BaseCrudComponent from '../../Base/BaseCrudComponent';
import TAHeader from '../TAHeader';
import * as types from '../../../constants/FormItemType';

@table_serch('assetCode', { namespace: 'accountConfirmationDetailsTable' })  //需要增加筛选的列
@connect(state => ({
  accountConfirmationDetailsTable: state.accountConfirmationDetailsTable,
  TASelect: state.TASelect,
}))

export default class accountConfirmationDetailsTable extends BaseCrudComponent {
  state = {
    selectedRows: [],
    switchstatus: false,
    formValues: { currentPage: 0 },
  };
  componentWillUnmount = () => {
    const { dispatch, namespace } = this.props;
    dispatch({
      type: `${namespace}/clean`,
    });
  };
  handleSaveState = (par) => {
    this.setState({ formValues: par });
  };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { formValues, status } = this.state;
    this.handleStandardTabpage(pagination, filtersArg, sorter, formValues, status);
  };

  componentDidMount() {
    const { dispatch, namespace } = this.props;
    dispatch({
      type: `${namespace}/loadingStatus`,
    });

    dispatch({
      type: `TASelect/OracleSelect`,
      payload: 'saleorginfo,fundinfo',
    });
    dispatch({
      type: `TASelect/OracleSelectChinese`,
      payload: 'custinfo',
    });


    dispatch({
      type: `TASelect/MySQLSelect`,
      payload: 'TA_APKINDD',
    });
    dispatch({
      type: `TASelect/MySQLSelectChinese`,
      payload: 'TA_INVTP,TA_APPLYST,TA_DATASO',
    });
  }

  render() {
    const {
      accountConfirmationDetailsTable: { loading, data }, dispatch, namespace,
      TASelect: { TA_INVTP, TA_APKINDD, TA_APPLYST, TA_DATASO, custinfo, saleorginfo, fundinfo },
    } = this.props;

    const { selectedRows, switchstatus, formValues: { currentPage } } = this.state;

    let columns, extra;
    let { data: { rows } } = data;
    if (rows.length !== 0) {
      columns = [
        { title: '申请日期', dataIndex: 'apdt', key: 'apdt' },
        { title: '确认日期', dataIndex: 'ackdt', key: 'ackdt' },
        { title: '机构代码', dataIndex: 'saleOrgCode', key: 'saleOrgCode' },
        { title: '销售机构名称', dataIndex: 'saleOrgName', key: 'saleOrgName' },
        { title: '申请流水号', dataIndex: 'appno', key: 'appno' },
        { title: '确认流水号', dataIndex: 'ackno', key: 'ackno' },
        { title: '投资人姓名', dataIndex: 'invname', key: 'invname' },
        { title: '基金账户', dataIndex: 'fundacct', key: 'fundacct' },
        { title: '交易账号', dataIndex: 'custno', key: 'custno' },
        { title: '业务代码', dataIndex: 'apkind', key: 'apkind' },
        { title: '业务名称', dataIndex: 'apkindn', key: 'apkindn' },
        { title: '网点号码', dataIndex: 'netpoint', key: 'netpoint' },
        { title: '投资者类型', dataIndex: 'invtype', key: 'invtype' },
        { title: '证件类型', dataIndex: 'idtype', key: 'idtype' },
        { title: '证件号码', dataIndex: 'idno', key: 'idno' },
        { title: '手机号', dataIndex: 'mobileno', key: 'mobileno' },
        { title: '办公电话', dataIndex: 'officetel', key: 'officetel' },
        { title: '地址', dataIndex: 'addr', key: 'addr' },
        { title: '邮政编码', dataIndex: 'postcode', key: 'postcode' },
        { title: '法人姓名', dataIndex: 'instreprname', key: 'instreprname' },
        {
          title: '法人证件类型',
          dataIndex: 'nstrepridtype',
          key: 'nstrepridtype',
        },
        {
          title: '法人证件号码',
          dataIndex: 'instrepridcode',
          key: 'instrepridcode',
        },
        { title: '经办人姓名', dataIndex: 'broker', key: 'broker' },
        { title: '经办人证件类型', dataIndex: 'bkidtype', key: 'bkidtype' },
        { title: '经办人证件号码', dataIndex: 'bkidno', key: 'bkidno' },
        { title: '案号', dataIndex: 'case_no', key: 'case_no' },
        { title: '冻结原因', dataIndex: 'rozencause', key: 'rozencause' },
        {
          title: '冻结挂失截止日期',
          dataIndex: 'freezingdeadline',
          key: 'freezingdeadline',
        },
        { title: '数据来源', dataIndex: 'dataSource', key: 'dataSource' },
        { title: '处理状态', dataIndex: 'applyst', key: 'applyst' },
        { title: '返回代码', dataIndex: 'retcode', key: 'retcode' },
        { title: '备注', dataIndex: 'summary', key: 'summary' },
      ];
      extra = { scroll: { x: 4000 } };
    }
    else {
      columns = [
        { title: '申请日期', dataIndex: 'apdt', key: 'apdt' },
        { title: '确认日期', dataIndex: 'ackdt', key: 'ackdt' },
        { title: '机构代码', dataIndex: 'saleOrgCode', key: 'saleOrgCode' },
        { title: '销售机构名称', dataIndex: 'saleOrgName', key: 'saleOrgName' },
        { title: '申请流水号', dataIndex: 'appno', key: 'appno' },
        { title: '确认流水号', dataIndex: 'ackno', key: 'ackno' },
        { title: '投资人姓名', dataIndex: 'invname', key: 'invname' },
        { title: '基金账户', dataIndex: 'fundacct', key: 'fundacct' },
        { title: '交易账号', dataIndex: 'custno', key: 'custno' },
        { title: '业务代码', dataIndex: 'apkind', key: 'apkind' },
        { title: '业务名称', dataIndex: 'apkindn', key: 'apkindn' },
        { title: '网点号码', dataIndex: 'netpoint', key: 'netpoint' },
        { title: '投资者类型', dataIndex: 'invtype', key: 'invtype' },
        { title: '证件类型', dataIndex: 'idtype', key: 'idtype' },
        { title: '证件号码', dataIndex: 'idno', key: 'idno' },
        { title: '手机号', dataIndex: 'mobileno', key: 'mobileno' },
        { title: '办公电话', dataIndex: 'officetel', key: 'officetel' },
        { title: '地址', dataIndex: 'addr', key: 'addr' },
        { title: '邮政编码', dataIndex: 'postcode', key: 'postcode' },
        { title: '法人姓名', dataIndex: 'instreprname', key: 'instreprname' },
        {
          title: '法人证件类型',
          dataIndex: 'nstrepridtype',
          key: 'nstrepridtype',
        },
        {
          title: '法人证件号码',
          dataIndex: 'instrepridcode',
          key: 'instrepridcode',
        },
        { title: '经办人姓名', dataIndex: 'broker', key: 'broker' },
        { title: '经办人证件类型', dataIndex: 'bkidtype', key: 'bkidtype' },
        { title: '经办人证件号码', dataIndex: 'bkidno', key: 'bkidno' },
        { title: '案号', dataIndex: 'case_no', key: 'case_no' },
        { title: '冻结原因', dataIndex: 'rozencause', key: 'rozencause' },
        {
          title: '冻结挂失截止日期',
          dataIndex: 'freezingdeadline',
          key: 'freezingdeadline',
        },
        { title: '数据来源', dataIndex: 'dataSource', key: 'dataSource' },
        { title: '处理状态', dataIndex: 'applyst', key: 'applyst' },
        { title: '返回代码', dataIndex: 'retcode', key: 'retcode' },
        { title: '备注', dataIndex: 'summary', key: 'summary' },
      ];
      extra = { scroll: { x: 1500 } };
    }

    /**
     * name:String，           必填：输入框前面的汉字
     * type:importNode，       必填：这个组件的类型      分为 types.INPUT（输入框）  types.DATE_RANGE（开始日期和截止日期） types.DATE（单一的日期） types.SELECTOR（下拉菜单）
     * key:String，            必填：汉字对应的字段
     * options:Boolean，       非必填：当搜索对应选项为必填时，此项必填，其他情况可不填，具体结构参照此例
     * dropdownname:Object，   注意：当types.SELECTOR为，此字段必填，为下拉菜单选项，具体结构参照此例
     */
    let item = [
      {
        name: '日期',
        type: types.DATE_RANGE,
        key: 'startDate/endDate',
        options: {
          rules: [{
            required: true, message: '请选择开始日期和截止日期',
          }],
        },
      },
      {
        name: '机构代码',
        type: types.SELECTOR,
        key: 'saleOrgCode',
        dropdownname: saleorginfo,
      },
      {
        name: '投资人姓名',
        type: types.SELECTOR,
        key: 'invname',
        dropdownname: custinfo,
      },
      {
        name: '基金账号',
        type: types.SELECTOR,
        key: 'fundacct',
        dropdownname: fundinfo,
      },
      {
        name: '投资者类型',
        type: types.SELECTOR,
        key: 'invtype',
        dropdownname: TA_INVTP,
      },
      {
        name: '业务代码',
        type: types.SELECTOR,
        key: 'apkind',
        dropdownname: TA_APKINDD,
      },
      {
        name: '处理状态',
        type: types.SELECTOR,
        key: 'applyst',
        dropdownname: TA_APPLYST,
      },
      {
        name: '数据来源',
        type: types.SELECTOR,
        key: 'dataSource',
        dropdownname: TA_DATASO,
      },
      {
        name: '确认流水号',
        type: types.INPUT,
        key: 'ackno',
      },
    ];

    return (
      <div>
        <TAHeader
          title={'账户确认明细信息'}               //报表名称 ——————————————所有参数必填
          downUrl={'/ams/report-api/viwereport/downloadbyquery/zhqrmx?'}   //下载地址
          namespace={namespace}          //models 命名空间
          dispatch={dispatch}
          item={item}
          handleSaveState={(par) => this.handleSaveState(par)}
        />
  <Card bordered={false} style={{ marginTop: 24, minHeight: 260 }}>
    <StandardTable
      rowKey={record => record.key}
      columns={columns}
      switchstatus={switchstatus}
      selectedRows={selectedRows}
      loading={loading}
      data={data}
      unSelect={true}
      bordered
      extra={extra}
      currentPage={currentPage}
      onChange={this.handleStandardTableChange}
    />
  </Card>
      </div>
    );

  }
}
