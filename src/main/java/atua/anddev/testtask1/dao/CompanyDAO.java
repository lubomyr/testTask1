package atua.anddev.testtask1.dao;

import atua.anddev.testtask1.entity.Company;

import java.util.List;

public interface CompanyDAO {
    void addCompany(Company company);
    Company getCompanyById(int id);
    List<Company> getAllCompanies();
    List<Company> getChildrenCompanies(int companyId);
    List<Company> getRootCompanies();
    void updateCompany(Company company);
    void deleteCompany(Company company);
}
